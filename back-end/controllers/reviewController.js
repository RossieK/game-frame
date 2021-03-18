const router = require('express').Router();
const userService = require('../services/userService');

router.get('/', (req, res) => {
    res.send("Reviews");
});

router.post('/', (req, res) => {

});

module.exports = router;