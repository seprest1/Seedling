const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');
const axios = require('axios');
const {rejectUnauthenticated,
} = require('../modules/authentication-middleware');


//gets plants from DB
router.get('/plants', rejectUnauthenticated, async(req, res) => {
  const connection = await pool.connect();
  try{
    const plantQuery = `
      SELECT * FROM plant
      ORDER BY CASE 
        WHEN shade = 'Full Sun' THEN 1
          WHEN shade = 'Partial Sun' THEN 2
          ELSE 3 END;`;
    const plantResponse = await connection.query(plantQuery)

    const growingQuery = `SELECT * FROM growing_season;`;
    const growingResponse = await connection.query(growingQuery)

    const companionQuery = `SELECT * FROM companion;`;
    const companionResponse = await connection.query(companionQuery)

    const plants = plantResponse.rows;
    const growing = growingResponse.rows;
    const companions = companionResponse.rows;

    //creates plant object with companions and growing chart data
    const updatedPlants = plants.map(plant => ({...plant,   
      growing: growing.find(chart => chart.id === plant.growing),
      companion: companions.filter(companion => companion.main_plant === plant.id)
    }));
    
    res.send(updatedPlants);
  }
  catch(error){
    console.log('ERROR in GET plants:', error);
    res.sendStatus(500);
  };
});

//posts plot to DB
router.post('/add_plot', rejectUnauthenticated, async (req, res) => {
  const connection = await pool.connect();

  try{ 
    const month = req.body.date.month;
    const year = req.body.date.year;
    const user = req.body.user;

    await connection.query('BEGIN')
      const plotQueryText = `
          INSERT INTO plot (user_id, month, year)
            VALUES ($1, $2, $3)
              RETURNING id;`;

    const insertedPlotResults = await connection.query(plotQueryText, [user, month, year]);
    
    //inserts each div one by one
    const plotId = insertedPlotResults.rows[0].id; 
    const plot = req.body.plot;
    await Promise.all(plot.map(div => {
      const divQueryText = `
          INSERT INTO div (plot_id, plant_id, location, shade, name, subvariety, color, icon)
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8);`;
      const divQueryValues = [plotId, div.plant_id, div.location, div.shade, div.name, div.subvariety, div.color, div.icon];
      return connection.query(divQueryText, divQueryValues);
    }));

    await connection.query('COMMIT')
        res.sendStatus(201);
    } 
    catch (error) {
        await connection.query('ROLLBACK')
        console.log('Error POST add_plot:', error);
        res.sendStatus(500);
    } 
    finally {
        connection.release()
    }
});

//gets plot from DB
router.get('/plot/:plot_id', rejectUnauthenticated, (req, res) => {
  console.log('In GET /plot/', req.params);

  const plotId =req.params.plot_id;
  const queryText = `
    SELECT div.*, plot.month, plot.year, plot.notes FROM div
      JOIN plot on plot.id = div.plot_id
        WHERE plot.id = $1 ORDER BY div.location;`;

  pool.query(queryText, [plotId])
      .then(result => {
        res.send(result.rows);
      })
      .catch(error => {
        console.log('ERROR in GET plot:', error);
        res.sendStatus(500);
      });
});

//sends edited plot to DB
router.put('/:id', rejectUnauthenticated, async (req, res) => {
  const connection = await pool.connect();

  try{
    await connection.query('BEGIN')

    const plot_id = Number(req.params.id);
    const plot = req.body;
    console.log(plot_id);
    
    await Promise.all(plot.map(div => {
      const queryText = 
        `UPDATE div 
          SET plant_id = $1, name = $2, subvariety = $3, color = $4, icon = $5
            WHERE (plot_id = $6 AND location = $7);`;
      const queryValues = [div.plant_id, div.name, div.subvariety, div.color, div.icon, plot_id, div.location];
      return connection.query(queryText, queryValues);
    }));

    await connection.query('COMMIT')
        res.sendStatus(201);
    } 
    catch (error) {
        await connection.query('ROLLBACK')
        console.log('Error PUT, edit plot route:', error);
        res.sendStatus(500);
    } 
    finally {
        connection.release()
    }
});

//deletes specified plot from DB
router.delete('/plot/:id', rejectUnauthenticated, (req, res) => {
  
  console.log(`In DELETE /plot/${req.params.id} route`);

  const plotToDelete = req.params.id;
  const queryText = 
    `DELETE FROM plot
        WHERE id = $1;`;
  
  pool.query(queryText, [plotToDelete])
      .then(result => {
        res.sendStatus(201);
      })
      .catch(error => {
        console.log('ERROR in DELETE plot:', error);
        res.sendStatus(500);
      });
});

//gets user plot ids and dates
router.get('/:id/plots', rejectUnauthenticated, async (req, res) => {
  const connection = await pool.connect();
  console.log('In GET userplots, user ID is:', req.params.id);

  try{  
    await connection.query('BEGIN')
    const queryText = `
      SELECT id, month, year FROM plot
        WHERE plot.user_id = $1
        ORDER BY year DESC, month DESC `;
  
    const userId = req.params.id;
    const response = await connection.query(queryText, [userId]);
    res.send(response.rows);
  }
  catch(error){
    console.log('ERROR in GET plotSSSS:', error);
    res.sendStatus(500);
  }
});

//adds notes to user's plot
router.put('/notes/:id', rejectUnauthenticated, (req, res) => {
  const plot_id = req.params.id;
  const notes = req.body.notes;
  console.log('In PUT notes route:', plot_id, notes);

  const queryText = `
      UPDATE "plot" 
        SET "notes" = $1
          WHERE id = $2;`;
  
  pool.query(queryText, [notes, plot_id])
      .then(result => {
        res.sendStatus(200);
      })
      .catch(error => {
        console.log('ERROR in PUT tasks:', error);
        res.sendStatus(500);
      });
});


module.exports = router;