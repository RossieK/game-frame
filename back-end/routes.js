const router = require('express').Router();
const registerController = require('./controllers/registerController');
const reviewController = require('./controllers/reviewController');
const gameController = require('./controllers/gameController');

router.use('/register', registerController);
router.use('/reviews', reviewController);
router.use('/games', gameController);

module.exports = router;