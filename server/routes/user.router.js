const express = require('express');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const encryptLib = require('../modules/encryption');
const pool = require('../modules/pool');
const userStrategy = require('../strategies/user.strategy');
const router = express.Router();
const axios = require('axios');
require('dotenv').config();
const api_key = process.env.ACCUWEATHER_API_KEY;

// Handles Ajax request for user information if user is authenticated
router.get('/', rejectUnauthenticated, (req, res) => {
  // Send back user object from the session (previously queried from the database)
  res.send(req.user);
});

// Handles POST request with new user data
router.post('/register', async (req, res, next) => {
  try{
    console.log(req.body);
    const username = req.body.username;
    const password = encryptLib.encryptPassword(req.body.password);
    const zipcode = req.body.zipcode;

    //gets weather key from accuweather API
    const response = await axios.get(`http://dataservice.accuweather.com/locations/v1/postalcodes/search?apikey=${api_key}&q=${zipcode}&language=en-us`);
    const weather_key = response.data[0].Key;
    const city = response.data[0].LocalizedName;

    const queryText = `INSERT INTO "user" (username, password, zipcode, city, weather_key)
      VALUES ($1, $2, $3, $4, $5) RETURNING id`;
    await pool.query(queryText, [username, password, zipcode, city, weather_key])
    res.sendStatus(201)
  }
  catch(error){
    console.log('User registration failed: ', error);
    res.sendStatus(500);
  };
});

// Handles login form authenticate/login POST
router.post('/login', userStrategy.authenticate('local'), (req, res) => {
  res.sendStatus(200);
});

// clear all server session information about this user
router.post('/logout', (req, res) => {
  req.logout();
  res.sendStatus(200);
});

module.exports = router;
