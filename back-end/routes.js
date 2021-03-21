const router = require('express').Router();
const registerController = require('./controllers/registerController');
const loginController = require('./controllers/loginController');
const reviewController = require('./controllers/reviewController');
const gameController = require('./controllers/gameController');
const userController = require('./controllers/userController');

router.use('/user', userController);
router.use('/register', registerController);
router.use('/login', loginController);
router.use('/reviews', reviewController);
router.use('/games', gameController);

module.exports = router;