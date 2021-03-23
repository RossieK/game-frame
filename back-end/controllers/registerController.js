const router = require('express').Router();
const userService = require('../services/userService');
const formValidator = require('../middlewares/formValidator');
const registerValidator = require('../middlewares/userMiddlewareValidator');

router.post('/', registerValidator, (req, res) => {
    const { email, password, rePassword } = req.body;

    if (!email || !password || !rePassword) {
        return res.status(400).json({ message: "All fields are required" });
    }

    const formValidations = formValidator(req);

    if (!formValidations.isValid) {
        return res.status(400).json({ message: `${formValidations.message}` });
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