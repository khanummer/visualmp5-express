const mongoose = require('mongoose');


const mashupSchema = new mongoose.Schema({
    userId: String,
    soundcloudSong: Object,
    Image: String,
    Video: Object,
    Votes: Number
});


export default mongoose.model('Mashup', mashupSchema);
