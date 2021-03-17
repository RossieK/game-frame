const mongoose = require('mongoose');
const { db_uri } = require('../config/config');

module.exports = (app) => {
    mongoose.connect(db_uri, { useNewUrlParser: true, useUnifiedTopology: true });

    mongoose.set('useCreateIndex', true);

    const db = mongoose.connection;

    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', console.log.bind(console, 'DB connected...'));
}