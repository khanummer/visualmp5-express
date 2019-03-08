const mongoose = require('mongoose');


const mashupSchema = new mongoose.Schema({
    userId: String,
    spotifySong: String,
    Image: String,
    Video: String,
    Votes: Number
});


module.exports = mongoose.model('Mashup', mashupSchema);
