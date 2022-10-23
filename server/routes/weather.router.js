const axios = require('axios');
const express = require('express');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const router = express.Router();
require('dotenv').config();

const api_key = process.env.ACCUWEATHER_API_KEY;


//gets location key from Accuweather API
router.get('/location', rejectUnauthenticated, async (req, res) => {
    try{
      const location_key = req.query.key;
      console.log(location_key);

      // const weather = await axios.get(`http://dataservice.accuweather.com/currentconditions/v1/${key}?apikey=${api_key}`);
      // console.log(weather.data);
      // res.send(weather.data); 
    }
    catch(error){
          console.log('ERROR in GET API location:', error);
          res.sendStatus(500);
    };
});

module.exports = router;