const router = require('express').Router();
const registerController = require('./controllers/registerController');

router.use('/register', registerController);

module.exports = router;