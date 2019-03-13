const mongoose = require('mongoose');

// create our db and connect
mongoose.connect(process.env.MONGODB_URI, {
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
