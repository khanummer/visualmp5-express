require('dotenv').config();
require('./db')

const express = require('express')
const app = express();
const cors = require('cors');
const axios = require('axios')



const apiController = require('./controllers/api');
const userController = require('./controllers/users');
app.use('/api', apiController);
app.use('/users', userController);



app.get('/', (req, res) => {
  res.send('app is working')
});

app.use('*', cors({ origin: 'http://localhost:3000'}));

app.listen(4000, () => {
  console.log('server is running on port 4000')
  console.log('graphql server is running on localhost:4000')
});