const mongoose = require('mongoose');

// default zero
const mashupSchema = new mongoose.Schema({
    userId: String,
    spotifySong: String,
    Image: String,
    Video: String,
    GIF: String,
    Votes: Number
});


module.exports = mongoose.model('Mashup', mashupSchema);
