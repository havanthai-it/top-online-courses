const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const connectDb = require('./db/database');
const initRoutes = require('./router');

// Connect to database
connectDb();

app.use(morgan('dev')); // Write log request in console
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Initial routes
initRoutes(app);

module.exports = app;
