const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');
const axios = require('axios');
const {rejectUnauthenticated,
} = require('../modules/authentication-middleware');
const moment = require('moment');


//gets plants from DB
router.get('/plants', rejectUnauthenticated, (req, res) => {
  const queryText = `
    SELECT * FROM plant
	    JOIN growing_season ON growing_season.plant_id = plant.id;`;
  pool.query(queryText)
      .then(result => {
        res.send(result.rows);
      })
      .catch(error => {
        console.log('ERROR in GET plants:', error);
        res.sendStatus(500);
      });
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
router.get('/:id/plot', rejectUnauthenticated, (req, res) => {
  const userId = req.params.id;

  const currentMonth = moment().format('MM');
  const currentYear = moment().format('YYYY');
 
 
  /////////////////////////HARDCODED FOR THE TIME BEING///////////////////////////
  const queryText = `
    SELECT div.*, plot.month, plot.year FROM div
      JOIN plot on plot.id = div.plot_id
      WHERE plot.month = 3 
        AND plot.year = 2022
        AND plot.user_id = $1;`;

  pool.query(queryText, [userId])
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
router.delete('/:id', rejectUnauthenticated, (req, res) => {
  const plotToDelete = req.params.id;
  const queryText = 
    `DELETE FROM plot
        WHERE id = $1;`;
  
  pool.query(queryText, [plotToDelete])
      .then(result => {
        res.sendStatus(401);
      })
      .catch(error => {
        console.log('ERROR in DELETE plot:', error);
        res.sendStatus(500);
      });
});

//gets user plot ids and dates
router.get('/:id/plots', rejectUnauthenticated, async (req, res) => {
  const connection = await pool.connect();

  try{  
    await connection.query('BEGIN')
    const queryText = `
      SELECT id, month, year FROM plot
        WHERE plot.user_id = $1
        ORDER BY year, month;`;
  
    const userId = req.params.id;
    const response = await connection.query(queryText, [userId]);
    res.send(response.rows);
  }
  catch(error){
    console.log('ERROR in GET plotSSSS:', error);
    res.sendStatus(500);
  }
});

module.exports = router;

















/////////////////////routes to access "grow stuff" API//////////////////////////////
//requests all plants (not specific subvarieties) from API
// router.get('/api/plants', rejectUnauthenticated, async (req, res) => {
//   try{
//     const response = await axios.get(`http://growstuff.org/crops.json`);
//     const all_plants = response.data;
//     res.send(all_plants);
//   }
//   catch(error){
//       console.log('ERROR in GET API location:', error);
//       res.sendStatus(500);
//   };
// });

// //sends search query to API for specific plant
// router.get('/api/search?:plant', rejectUnauthenticated, async (req, res) => {
//   try{
//     const plant = req.query.plant;
//     console.log(plant);
//     const response = await axios.get(`http://growstuff.org/crops/${plant}.json`);
//     const plant_info = response.data;
//     console.log(plant_info);
//     res.send(plant_info);
//   }
//   catch(error){
//       console.log('ERROR in search plant API:', error);
//       res.sendStatus(500);
//   };
// });