const express = require('express');
const configMongoose = require('./config/mongoose');
const configExpress = require('./config/express');
const routes = require('./routes');
const { port } = require('./config/config');

// App initialization
const app = express();
configExpress(app);
configMongoose(app);

// Routes
app.use(routes);

// Server initialization
app.listen(port, () => console.log(`Server is running on port ${port}...`));