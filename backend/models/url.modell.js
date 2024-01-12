const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema({
    userId: mongoose.SchemaTypes.ObjectId,
    originalUrl: {
        type: String,
        required: true
    },
    shortUrl: String,
    count: {
        type: Number,
        default: 0
    },
    createAt: {
        type: Date,
        default: Date.now()
    }
})

let Url = mongoose.model('url', urlSchema);
module.exports = Url; 