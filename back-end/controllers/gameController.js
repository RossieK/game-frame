const router = require('express').Router();
const gameService = require('../services/gameService');
const auth = require('../middlewares/auth');

router.get('/', auth, (req, res) => {
    gameService.getAll()
        .then(games => {
            res.status(200).json(games);
        })
        .catch(err => {
            res.status(500).json({ message: "Internal error" });
        })
});

router.post('/', (req, res) => {
    const { gameName, imageUrl } = req.body;

    gameService.create({ gameName, imageUrl })
        .then(game => {
            res.status(200).json(game);
        })
        .catch(err => {
            res.status(500).json({ message: "Internal error" });
        });
});

router.delete('/:id', (req, res) => {
    gameService.deleteOne(req.params.id)
        .then(() => {
            res.status(200).json({ message: "Deleted successfully" });
        })
        .catch(() => {
            res.status(500).json({ message: "Internal error" });
        })
});

module.exports = router;