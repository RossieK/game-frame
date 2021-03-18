const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
    gameName: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Game', gameSchema);