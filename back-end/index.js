const express = require('express');
const configMongoose = require('./config/mongoose');
const configExpress = require('./config/express');
const routes = require('./routes');
const { port } = require('./config/config');

// App initialization
const app = express();
configExpress(app);
configMongoose(app);

//CORS
app.use((req, res, next) => {

    res.setHeader('Access-Control-Allow-Origin', '*');

    res.setHeader('Access-Control-Allow-Methods',
        'OPTIONS, GET, POST, PUT, PATCH, DELETE');

    res.setHeader('Access-Control-Allow-Headers',

        'Content-Type, Authorization');

    next();

});

// Routes
app.use(routes);

// Server initialization
app.listen(port, () => console.log(`Server is running on port ${port}...`));