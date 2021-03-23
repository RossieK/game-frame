const router = require('express').Router();
const userService = require('../services/userService');

router.post('/', async(req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: "Please enter all fields" });
    }

    try {
        let token = await userService.login({ email, password });
        let user = await userService.getUser(email);

        res.json({
            token,
            user: {
                id: user._id,
                email: user.email
            }
        });
    } catch (error) {
        res.status(400).json({ message: `${error}` });
    }
});

module.exports = router;