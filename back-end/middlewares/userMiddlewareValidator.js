const { body } = require('express-validator');

module.exports = [
    body('email', 'The provided email is not valid').isEmail(),
    body('password', 'The password should be at least 5 chars long').isLength({ min: 5 }),
    body('rePassword').custom(customRePasswordCheck)
]

function customRePasswordCheck(rePassword, { req }) {
    if (rePassword != req.body.password) {
        throw new Error('Both passwords should match');
    }

    return true;
}