require('dotenv').config();
require('./db')

const express = require('express')
const app = express();
const cors = require('cors');
const axios = require('axios')
const bodyParser = require('body-parser')
const session = require('express-session')

const SECRET = process.env.SECRET
// app.use(cors());

// app.use('*', cors({ origin: 'http://localhost:3000'}));
app.use(cors({credentials: true, origin: ['http://localhost:3000', 'https://visual-mp5.herokuapp.com']}));

/********** MIDDLEWARE **********/
app.use(session({
  secret: `${SECRET}`,
  resave: false,
  saveUninitialized: false
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const apiController = require('./controllers/api');
const userController = require('./controllers/users');
const mashupController = require('./controllers/mashups');
app.use('/api', apiController);
app.use('/users', userController);
app.use('/mashups', mashupController);




app.get('/', (req, res) => {
  res.send('app is working')
});

app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'https://visual-mp5.herokuapp.com');
  
  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  
  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Origin');
  
  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);
  
  // Pass to next layer of middleware
  next();
  });

app.listen(process.env.PORT, () => {
  console.log('server is running on localhost:4000')
});