const router = require('express').Router();
const registerController = require('./controllers/registerController');
const reviewController = require('./controllers/reviewController');

router.use('/register', registerController);
router.use('/reviews', reviewController);

module.exports = router;