const express = require('express');
const router = express();
// const axios = require('axios');

// app.get('/soundcloud', async (req, res) => {
//     axios.get(``)
//     .then((response) => {
//         console.log(response)
//         // return res.json(response.data)
//     })
//     .catch(function (error) {
//         console.log(error)
//     });
// });

// spotify API 
var SpotifyWebApi = require('spotify-web-api-node');

var spotifyApi = new SpotifyWebApi({
  clientId: process.env.SPOTIFY_CLIENT_ID,
  clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
  redirectUri: 'localhost:3000'
});

spotifyApi.setAccessToken(process.env.SPOTIFY_ACCESS_TOKEN);
// ------------
// spotifyApi.getTrack('0pBcI8Gf1Oe3ziIbE9tBsX')
//   .then(function(data) {
//     console.log('get nipsey hussle', data.body);
//   }, function(err) {
//     console.error(err);
//   });

// spotifyApi.searchTracks('love hurts')
//   .then(function(data) {
//     console.log('Search by "love hurts"', data.body.tracks.items);
//   }, function(err) {
//     console.error(err);
//   });


// search for tracks
//   app.get(`/spotify/search/${req.params.query}`, async (req, res) => {
//     axios.get(`https://api.spotify.com/v1/search?q=${req.params.query}&type=track`, {
//       headers: {
//         Authorization: process.env.SPOTIFY_ACCESS_TOKEN
//       }
//     })
//     .then(function (response) {
//       console.log(response.data)
//         return res.json(response.data)
//     })
//     .catch(function (error) {
//         console.log(error)
//     });
//   });

    // axios.get(`https://api.spotify.com/v1/search?q=pokemon&type=track`, {
    //   headers: {
    //     Authorization: process.env.SPOTIFY_ACCESS_TOKEN
    //   }
    // })
    // .then(function (response) {
    //   console.log(response.data)
    //     // return res.json(response.data)
    // })
    // .catch(function (error) {
    //     console.log(error)
    // });



module.exports = router;