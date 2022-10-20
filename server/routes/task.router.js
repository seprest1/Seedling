const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');
const axios = require('axios');
const {rejectUnauthenticated,
} = require('../modules/authentication-middleware');

router.post('/', rejectUnauthenticated, (req, res) => {
    const user = req.body.user;
    const task = req.body.task;
    console.log('Req.body in POSTtasks:', user, task);

    const queryText = `
        INSERT INTO "tasks" (user_id, task)
            VALUES ($1, $2);`;
    
    pool.query(queryText, [user, task])
        .then(result => {
          res.sendStatus(201);
        })
        .catch(error => {
          console.log('ERROR in POST tasks:', error);
          res.sendStatus(500);
        });
});

module.exports = router;
