const express = require('express');
const routes = require('./routes/index');

const app = express();

// Use routes
app.use('/', routes);

module.exports = app;