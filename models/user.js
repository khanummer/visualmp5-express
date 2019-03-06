const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    profilePic: String
});


export default mongoose.model('User', userSchema);
