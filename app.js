const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');
const methodOverride = require('method-override')

const routes = require('./routes');

const app = express();

const port = process.env.PORT || '3000';

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs')