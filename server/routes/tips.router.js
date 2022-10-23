const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/', (req, res) => {
    console.log('in GET tips route');

    const queryText = `SELECT tip FROM "tips";`;
    
    pool.query(queryText)
        .then(result => {
          res.send(result.rows);
        })
        .catch(error => {
          console.log('ERROR in GET tips:', error);
          res.sendStatus(500);
        });
});

module.exports = router;