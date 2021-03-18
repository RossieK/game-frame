const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    user: {
        type: String,
        required: true,
        unique: true
    },
    game: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    review: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Review', reviewSchema);