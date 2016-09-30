import express from 'express';
import { authCheck } from '../services/authService';
import mongoose from 'mongoose';
import _ from 'lodash';

import modelSuggestion from '../models/suggestion';
import modelComment from '../models/comment';


var router = express.Router();
var Suggestion = mongoose.model('Suggestion');
var Comment = mongoose.model('Comment');

// POST Suggestion
router.post('/', authCheck, function(req, res, next) {
    var title = req.body.title;
    var content = req.body.content;
    var author = req.body.isAnonymous ? 'anonymous' : req.user.email;

    Suggestion.create({
        title: title,
        content: content,
        author: author,
        category: mongoose.Types.ObjectId(req.body.category)
    }, function (err, sugg) {
        if (err) return next(err);
        res.send({ message: 'New suggestion created : <a href="/suggestion/' + sugg.id + '">click here</a>' } );
    });

});


// GET Top X suggestions
router.get('/top/:count?', function (req, res, next) {
    var top = req.params.count || 10;
    top = isNaN(top) || top > 100 ? 10 : parseInt(top);

    Suggestion.find()
        .sort('-likes')
        .limit(top)
        .select('-voters')
        .exec(function(err, data) {
            if (err) return next(err);

            res.send(data);
        });

});

// GET Last X created suggestions
router.get('/last/:count?', function (req, res, next) {
    var last = req.params.count || 10;
    last = isNaN(last) || last > 100 ? 10 : parseInt(last);

    Suggestion.find()
        .sort('-created')
        .limit(last)
        .select('-voters')
        .exec(function(err, data) {
            if (err) return next(err);

            res.send(data);
        });

});

router.get('/find', function (req, res, next) {
    var re = new RegExp(req.query.term, 'i');

    Suggestion.find()
              .or([{ 'title': { $regex: re }},
                   { 'content': { $regex: re }},
                   { 'author' : { $regex: re }}])
              .sort('-created')
              .select('-voters')
              .exec(function(err, data) {
                  if (err) return next(err);

                  res.send(data);
             });
});

// GET Suggestion
router.get('/:suggestion_id', function(req, res, next) {
    var id = req.params.suggestion_id;

    Suggestion.findById(id).select('-voters').exec(function (err, sugg) {
        if (err) return next(err);

        if (!sugg) return next(); // 404

        res.send({suggestion: sugg});
    });
});

// PUT Suggestion
router.put('/:suggestion_id', authCheck, function(req, res, next) {
    var id = req.params.suggestion_id;
    var content = req.body.content;
    var title = req.body.title;
    var email = req.user.email;

    console.log('Updating suggestion', id, content, email);

    Suggestion.findById(id).exec(function (err, sugg) {

        if (err) return next(err);

        if(!sugg) return next();

        if (sugg.author !== email) {
            res.status(403).send({ message : 'You\'re not allowed to update this suggestion.'});
        }
        else {
            console.log('Updating content');
            Suggestion.updateContent(id, title, content, function (err) {
                if (err) return next(err);
                console.log('no error');
                sugg.content = content;
                sugg.title = title;
                sugg.updated = Date.now();

                res.send({message: 'Suggestion updated!', suggestion: sugg});
            });
        }
    });


});

// DELETE Suggestion
router.delete('/:suggestion_id', authCheck,  function (req, res, next) {
    var id = req.params.suggestion_id;
    Suggestion.findById(id).exec(function (err, sugg) {
        if (err) return next(err);

        if (!sugg) return next(); // 404

        sugg.remove(function (err) {
            if (err) return next(err);
            res.send({ message: 'Suggestion deleted.'});
        });
    });
});

// PUT Suggestion, update counters
router.put('/:suggestion_id/like', authCheck, function (req, res, next) {
    var id = req.params.suggestion_id;
    var email = req.user.email;
    console.log('user', JSON.stringify(req.user));
    
    Suggestion.findById(id).exec(function (err, sugg) {
        if (err) return next(err);

        if(!sugg) return next();

        console.log('suggestion', JSON.stringify(sugg));
        if (_.find(sugg.voters, function (item) { return item === req.user.email;})) {
            res.send({ message : 'You have already voted for that suggestion.', type: 'warning'});
        }
        else {
            Suggestion.likeOrDislike(id, email, true, function (err) {
                if (err) return next(err);

                res.send({ message : 'Vote accepted!', type: 'success'});
            });
        }
    });
});

// PUT Suggestion, update counters
router.put('/:suggestion_id/dislike', authCheck, function (req, res, next) {
    var id = req.params.suggestion_id;
    var email = req.user.email;
    Suggestion.findById(id).exec(function (err, sugg) {
        if (err) return next(err);

        if(!sugg) return next();

        console.log('suggestion', JSON.stringify(sugg));

        if (_.find(sugg.voters, function (item) { return item === req.user.email;})) {
            res.send({ message : 'You have already voted for that suggestion.', type: 'warning'});
        }
        else {
            Suggestion.likeOrDislike(id, email, false, function (err) {
                if (err) return next(err);

                res.send({ message : 'Vote accepted!', type: 'success'});
            });
        }
    });
});


export default router;