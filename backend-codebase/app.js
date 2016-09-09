var express = require('express');
var cors = require('cors');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var mongoose = require('mongoose');
var models = require('./models');

var config = require('./config');
var suggestions = require('./routes/suggestions');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(cors());
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Here we use the public dir for our FE assets, maybe we want this to be different based on the ENV
app.use(express.static(path.join(__dirname, 'public')));

var MONGO_DB;
var DOCKER_DB = process.env.DB_PORT;
if ( DOCKER_DB ) {
    MONGO_DB = DOCKER_DB.replace( 'tcp', 'mongodb' ) + '/suggestions';
} else {
    MONGO_DB = config.database;
}

mongoose.connect(MONGO_DB, function(err) {
    if (err) throw err;
});

mongoose.connection.on('error', function() {
    console.info('Error: Could not connect to MongoDB. Did you forget to run `mongod`?');
});

// Api routes
app.use('/api/suggestions', suggestions);

// Render the index page for all routes
app.get('*', function(req, res) {
    res.status(200).render('index', {title: 'Suggestions'});
});

module.exports = app;
