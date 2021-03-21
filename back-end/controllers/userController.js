const router = require('express').Router();
const auth = require('../middlewares/auth');
const User = require('../models/User');

router.get('/', auth, (req, res) => {
    User.findById(req.user._id)
        .select('-password')
        .then(user => res.json(user));
});

module.exports = router;