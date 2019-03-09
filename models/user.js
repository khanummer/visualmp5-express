const mongoose = require('mongoose');

// SET UNIQUE = TRUE
const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    profilePic: String
});


module.exports = mongoose.model('User', userSchema);
