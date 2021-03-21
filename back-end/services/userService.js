const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { salt_rounds, secret } = require('../config/config');

async function register(data) {
    const { email, password } = {...data };

    let foundUserEmail = await User.findOne({ email });

    if (foundUserEmail) {
        throw new Error('The given email is already in use');
    }

    let salt = await bcrypt.genSalt(salt_rounds);
    let hash = await bcrypt.hash(password, salt);

    const user = new User({ email, password: hash });
    return user.save();
}

function loginUponRegistration(user) {
    let token = jwt.sign({ _id: user._id }, secret);
    return token;
}

module.exports = {
    register,
    loginUponRegistration
}