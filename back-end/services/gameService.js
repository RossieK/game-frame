const Game = require('../models/Game');

function create(data) {
    const { gameName, imageUrl } = {...data };

    const game = new Game({ gameName, imageUrl });
    return game.save();
}

function getAll() {
    return Game.find().lean();
}

module.exports = {
    create,
    getAll
}