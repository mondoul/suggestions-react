import express from 'express';
import { getConfig } from '../config';
import mongoose from 'mongoose';
import jwt from 'express-jwt';
import modelSuggestion from '../models/suggestion';
import modelComment from '../models/comment';

var router = express.Router();
var Suggestion = mongoose.model('Suggestion');
var Comment = mongoose.model('Comment');
var config = getConfig();

const authCheck = jwt({
    secret: new Buffer(config.auth0Secret, 'base64'),
    audience: config.auth0ClientId
});

const pageSize = 10;

router.post('/:suggestion_id', authCheck, function (req, res, next) {
    var content = req.body.content;
    var author = req.user.email;

    Comment.create({
        content: content,
        author: author,
        post: mongoose.Types.ObjectId(req.params.suggestion_id)
    }, function (err, comment) {
        if (err) return next(err);
        console.log('comment created', comment);
        res.send({ message: 'Comment saved', comment: comment});
    });
});

router.get('/:suggestion_id/:page?', function( req, res, next) {
    var id = req.params.suggestion_id;
    var page = req.params.page || 1;
    page = isNaN(page) ? 1 : parseInt(page);

    var comments = Suggestion.findComments(id)
             .sort('-created')
             .select('-_id')
             .skip((page - 1) * pageSize)
             .limit(pageSize)
             .exec(function (err, comments) {
        if (err) return next(err);
        res.send({comments: comments});

    });
});

export default router;