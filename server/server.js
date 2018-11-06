// DEPENDENCIES
const express = require('express');

const server = express();

// MIDDLEWARE
const configureMiddleware = require('./config/middleware');

configureMiddleware(server);

// ROUTES
const exampleRoutes = require('./routes/exampleRoutes');

server.get('/', (req, res) => { // get list of notes
  res.send(`test`)
});

server.use('/api/example', exampleRoutes);

module.exports = server;
