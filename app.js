var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var arduino = require('./routes/arduino');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(logger('common'));

app.use('/arduino', arduino);
app.use('/', index);

module.exports = app;
