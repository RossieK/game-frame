const router = require('express').Router();
const gameService = require('../services/gameService');

router.get('/', (req, res) => {
    gameService.getAll()
        .then(games => {
            res.send(games);
        })
        .catch(err => {
            console.log(err);
        })
});

router.post('/', (req, res) => {
    const { gameName, imageUrl } = req.body;

    gameService.create({ gameName, imageUrl })
        .then(game => {
            res.send(game);
        })
        .catch(err => {
            console.log(err);
        });
});

module.exports = router;