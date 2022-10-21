const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');
const axios = require('axios');
const {rejectUnauthenticated,
} = require('../modules/authentication-middleware');

router.get('/:user', rejectUnauthenticated, (req, res) => {
    console.log('in GET tasks route');

    const queryText = 
    `SELECT id, task, completed FROM "tasks" 
        WHERE user_id = $1
            ORDER BY id DESC;`;
    
    pool.query(queryText, [req.params.user])
        .then(result => {
          res.send(result.rows);
        })
        .catch(error => {
          console.log('ERROR in GET tasks:', error);
          res.sendStatus(500);
        });
});

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

router.put('/:id', rejectUnauthenticated, (req, res) => {
  const task_id = req.params.id;
  console.log('In PUT tasks route');

  const queryText = `
      UPDATE "tasks" 
        SET "completed" = NOT "completed" 
          WHERE id = $1;`;
  
  pool.query(queryText, [task_id])
      .then(result => {
        res.sendStatus(200);
      })
      .catch(error => {
        console.log('ERROR in PUT tasks:', error);
        res.sendStatus(500);
      });
});

router.delete('/:id', rejectUnauthenticated, (req, res) => {
  const task_id = req.params.id;
  console.log('In PUT tasks route');

  const queryText = `
      DELETE FROM "tasks" 
          WHERE id = $1;`;
  
  pool.query(queryText, [task_id])
      .then(result => {
        res.sendStatus(200);
      })
      .catch(error => {
        console.log('ERROR in DELETE tasks:', error);
        res.sendStatus(500);
      });
});

module.exports = router;
