const Game = require('../models/Game');

function create(data) {
    const { gameName, imageUrl } = {...data };

    const game = new Game({ gameName, imageUrl });
    return game.save();
}

function getAll() {
    return Game.find().lean();
}

function deleteOne(id) {
    return Game.deleteOne({ _id: id });
}

module.exports = {
    create,
    getAll,
    deleteOne
}