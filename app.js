var express = require('express');
var jwt = require('express-jwt');
var cors = require('cors');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

require('babel-register');// Babel ES6/JSX Compiler
//var React = require('react');
//var ReactDOM = require('react-dom/server');
//var Router = require('react-router');
//var routes = require('./frontend-codebase/routes');
var mongoose = require('mongoose');
var models = require('./models');

var config = require('./config');
var suggestions = require('./routes/suggestions');

const authCheck = jwt({
    secret: new Buffer('xIOzOMRQX8tBgDKds9iEZLMWb72H2qovgDzUldgDanmaHes3vzancY9-zz58O4Bw', 'base64'),
    audience: 'ClohFBYJyM7q0Nc6y9tY5blht98wjaBw'
});


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cors());
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Here we use the public dir for our FE assets, maybe we want this to be different based on the ENV
app.use(express.static(path.join(__dirname, 'public')));

mongoose.connect(config.database);
mongoose.connection.on('error', function() {
    console.info('Error: Could not connect to MongoDB. Did you forget to run `mongod`?');
});

// Api routes
app.use('/api/suggestions', suggestions);

// React routes
app.get('*', function(req, res) {
    res.status(200).render('index', {title: 'Suggestions'});

    // Router.match({ routes: routes.default, location: req.url }, function(err, redirectLocation, renderProps) {
    //     if (err) {
    //         res.status(500).send(err.message)
    //     } else if (redirectLocation) {
    //         res.status(302).redirect(redirectLocation.pathname + redirectLocation.search)
    //     } else if (renderProps) {
    //         var html = ReactDOM.renderToString(React.createElement(Router.RoutingContext, renderProps));
    //         res.status(200).render('index', {title: 'Suggestions', html: html});
    //     } else {
    //         res.status(404).send('Page Not Found')
    //     }
    // });
});

module.exports = app;
