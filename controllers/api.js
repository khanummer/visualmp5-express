require('dotenv').config();
const express = require('express');
const router = express.Router();
const axios = require('axios');

const lastFmApiKey = process.env.LASTFM_API_KEY



router.get(`/lastFM/search/:search`, async (req, res) => {
    axios.get(`http://ws.audioscrobbler.com/2.0/?method=track.search&track=${req.params.search}&api_key=${lastFmApiKey}&format=json`)
    .then(function (response) {
      console.log(response.data)
        return res.json(response.data)
    })
    .catch(function (error) {
        console.log(error)
    });
  });




module.exports = router;