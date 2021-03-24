const { body } = require('express-validator');

module.exports = [
    body('user', 'The name should be at least 3 chars long').isLength({ min: 3 }),
    body('game', 'The game name should be at least 3 chars long').isLength({ min: 3 }),
    body('imageUrl', 'The image URL should start with http or https').matches(/^https?:\/\/(.*)/),
    body('description', 'The description should be at least 10 chars long').isLength({ min: 10 })
]