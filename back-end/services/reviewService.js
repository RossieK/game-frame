const Review = require('../models/Review');

function create(data) {
    const { user, game, imageUrl, description } = {...data };

    const review = new Review({ user, game, imageUrl, description });
    return review.save();
}

function getAll() {
    return Review.find().lean();
}

module.exports = {
    create,
    getAll
}