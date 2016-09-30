import express from 'express';
import cors from 'cors';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import mongoose from 'mongoose'
import path from 'path';
import favicon from 'serve-favicon';
import { getConfig } from './config';
import suggestions from './routes/suggestions';
import comments from './routes/comments';
import categories from './routes/categories';

const app = express();

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


const MONGO_DB = process.env.NODE_ENV ? 'db:27017': getConfig().database;

mongoose.connect('mongodb://' + MONGO_DB, (err) => {
    if (err) throw err;
});

mongoose.connection.on('error', () => {
    console.info('Error: Could not connect to MongoDB. Did you forget to run `mongod`?');
});

// Api routes
app.use('/api/suggestions', suggestions);
app.use('/api/comments', comments);
app.use('/api/categories', categories);

// Render the index page for all routes
app.get('*', (req, res) => {
    res.status(200).render('index', {title: 'Suggestions'});
});

export default app;
