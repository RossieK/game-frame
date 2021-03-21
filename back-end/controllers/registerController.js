const router = require('express').Router();
const userService = require('../services/userService');

router.post('/', (req, res) => {
    const { email, password, rePassword } = req.body;

    if (!email || !password || !rePassword) {
        return res.status(400).json({ message: "Please enter all fields" });
    }

    if (password != rePassword) {
        return res.status(400).json({ message: "Both passwords should match" });
    }

    userService.register({ email, password })
        .then(async(user) => {
            let token = await userService.loginUponRegistration(user);

            res.json({
                token,
                user: {
                    id: user._id,
                    email: user.email
                }
            });
        })
        .catch(err => {
            res.status(400).json({ message: `${err}` });
        });
});

module.exports = router;