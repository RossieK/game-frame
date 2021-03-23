const { validationResult } = require('express-validator');

module.exports = (req) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return {
            message: `${errors.array()[0].msg}`,
            isValid: false
        };
    }

    return { isValid: true }
};