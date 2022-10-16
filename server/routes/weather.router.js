const axios = require('axios');
const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');
require('dotenv').config();
const api_key = process.env.ACCUWEATHER_API_KEY;


//gets location key from Accuweather API
router.get('/location', (req, res) => {
    const zipcode = req.query.zip;
    console.log(zipcode);
    axios({
        method: 'GET',
        url: `http://dataservice.accuweather.com/locations/v1/postalcodes/search?apikey=${api_key}&q=${zipcode}&language=en-us`
    }).then(result => {
          console.log(result.data);
        })
        .catch(error => {
          console.log('ERROR in GET API location:', error);
          res.sendStatus(500);
        });
  });

module.exports = router;