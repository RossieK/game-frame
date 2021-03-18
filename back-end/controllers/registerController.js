const router = require('express').Router();
const userService = require('../services/userService');

router.post('/', (req, res) => {
    const { email, password } = req.body;
    console.log(req.body);

    userService.register({ email, password })
        .then(user => {
            res.send(user);
        })
        .catch(err => {
            console.log(err);
        });
});

module.exports = router;