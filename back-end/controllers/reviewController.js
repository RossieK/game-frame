const router = require('express').Router();
const reviewService = require('../services/reviewService');
const reviewValidator = require('../middlewares/reviewMiddlewareValidator');
const formValidator = require('../middlewares/formValidator');

router.get('/', (req, res) => {
    reviewService.getAll()
        .then(reviews => {
            res.status(200).json(reviews);
        })
        .catch(err => {
            res.status(500).json({ message: "Internal error" });
        })
});

router.post('/', reviewValidator, (req, res) => {
    const { user, game, imageUrl, description } = req.body;

    if (!user || !game || !imageUrl || !description) {
        return res.status(400).json({ message: "All fields are required" });
    }

    const formValidations = formValidator(req);

    if (!formValidations.isValid) {
        return res.status(400).json({ message: `${formValidations.message}` });
    }

    reviewService.create({ user, game, imageUrl, description })
        .then(review => {
            res.status(200).json(review);
        })
        .catch(err => {
            res.status(500).json({ message: "Internal error" });
        });
});

module.exports = router;