const router = require('express').Router();
const userService = require('../services/userService');

router.post('/', async(req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: "Please enter all fields" });
    }

    try {
        let token = await userService.login({ email, password });
        res.json({
            token
        });
    } catch (error) {
        res.status(400).json({ message: `${error}` });
    }
});

module.exports = router;