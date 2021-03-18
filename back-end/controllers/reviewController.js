const router = require('express').Router();
const reviewService = require('../services/reviewService');

router.get('/', (req, res) => {
    reviewService.getAll()
        .then(reviews => {
            res.send(reviews);
        })
        .catch(err => {
            console.log(err);
        })
});

router.post('/', (req, res) => {
    const { user, game, imageUrl, description } = req.body;

    reviewService.create({ user, game, imageUrl, description })
        .then(review => {
            res.send(review);
        })
        .catch(err => {
            console.log(err);
        });
});

module.exports = router;