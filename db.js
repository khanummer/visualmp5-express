const mongoose = require('mongoose');
require('dotenv').config();

const database = process.env.MONGODB_URI

// create our db and connect
mongoose.connect(database, {
   useNewUrlParser: true, 
   useCreateIndex: true,
   useFindAndModify: false  
  });



mongoose.connection.on('connected', () => {
  console.log('mongoose is connected');
});

mongoose.connection.on('error', (err) => {
  console.log(err, 'mongoose error');
});

mongoose.connection.on('disconnected', () => {
  console.log('mongoose is disconnected');
});
