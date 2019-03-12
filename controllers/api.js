require('dotenv').config();
const express = require('express');
const router = express.Router();
const axios = require('axios');

const lastFmApiKey = process.env.LASTFM_API_KEY
const giphyApiKey = process.env.GIPHY_API_KEY


router.get(`/lastFM/search/:search`, async (req, res) => {
    axios.get(`http://ws.audioscrobbler.com/2.0/?method=track.search&track=${req.params.search}&api_key=${lastFmApiKey}&limit=25&format=json`)
    .then(function (response) {
      // console.log(response.data)
        return res.json(response.data)
    })
    .catch(function (error) {
        console.log(error)
    });
  });

router.get(`/giphy/search/:search`, async (req,res) => {
  axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${giphyApiKey}&q=${req.params.search}&limit=25&offset=0&rating=G&lang=en`)
  .then(function (response) {
    return res.json(response.data) 
  })
  .catch(function (error) {
    console.log(error)
  })
})


module.exports = router;