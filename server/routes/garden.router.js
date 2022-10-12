const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

//gets plants from DB
router.get('/plants', (req, res) => {
  const queryText = `SELECT * FROM plant ORDER BY sunlight;`;
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
router.post('/add_plot', (req, res) => {
  console.log(req.body);
  const hardCodedUserId = 12345;
  const month = req.body.month;

  const createPlot = `
      INSERT INTO plot (user_id, month)
        VALUES ($1, $2)
          RETURNING id;`;

  pool.query(createPlot, [hardCodedUserId, month])
      .then(result => {
        const plotId = result.rows[0].id; 
        const plot = req.body.plot;
        console.log(plotId);

        const createDiv = `
            INSERT INTO div (plot_id, plant_id, location, shade, name)
              VALUES ($1, $2, $3, $4, $5);`
        for (div of plot){      
          pool.query(createDiv, [plotId, div.plant_id, div.location, div.shade, div.name])
        }
        res.sendStatus(201);
      })
      .catch(error => {
        console.log('ERROR in POST plot:', error);
      });
});

module.exports = router;