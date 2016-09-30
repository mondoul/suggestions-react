import express from 'express';
import { authCheck } from '../services/authService';
import mongoose from 'mongoose';
import modelSuggestion from '../models/suggestion';
import modelComment from '../models/comment';
import modelCategory from '../models/category';

var router = express.Router();
var Suggestion = mongoose.model('Suggestion');
var Comment = mongoose.model('Comment');
var Category = mongoose.model('Category');

router.get('/', function (req, res, next) {
    Category.find()
        .sort('title')
        .exec(function(err, data) {
            if (err) return next(err);
            res.send(data);
        });
});

router.post('/', authCheck, function (req, res, next) {
    var title = req.body.title;
    var author = req.user.email;
    Category.create({
        title,
        author
    }, function (err, author) {
        if (err) return next(err);
        res.send({message:'Category created.'});
    });

});

export default router;