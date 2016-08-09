var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

require('babel-register');// Babel ES6/JSX Compiler
var React = require('react');
var ReactDOM = require('react-dom/server');
var Router = require('react-router');
var routes = require('./frontend-codebase/routes');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Here we use the public dir for our FE assets, maybe we want this to be different based on the ENV
app.use(express.static(path.join(__dirname, 'public')));

app.use(function(req, res) {
    Router.match({ routes: routes.default, location: req.url }, function(err, redirectLocation, renderProps) {
        if (err) {
            res.status(500).send(err.message)
        } else if (redirectLocation) {
            res.status(302).redirect(redirectLocation.pathname + redirectLocation.search)
        } else if (renderProps) {
            var html = ReactDOM.renderToString(React.createElement(Router.RoutingContext, renderProps));
            res.status(200).render('index', {title: 'Suggestions', html: html});
        } else {
            res.status(404).send('Page Not Found')
        }
    });
});

module.exports = app;
