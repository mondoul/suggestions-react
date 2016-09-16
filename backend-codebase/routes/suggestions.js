var express = require('express');
var config = require('../config');
var router = express.Router();
var mongoose = require('mongoose')
var Suggestion = mongoose.model('Suggestion');
var Comment = mongoose.model('Comment');
var jwt = require('express-jwt');
var _ = require('lodash');

const authCheck = jwt({
    secret: new Buffer(config.auth0Secret, 'base64'),
    audience: config.auth0ClientId
});

// POST Suggestion
router.post('/', authCheck, function(req, res, next) {
    var title = req.body.title;
    var content = req.body.content;
    var author = req.user.email;

    Suggestion.create({
        title: title,
        content: content,
        author: author
    }, function (err, sugg) {
        if (err) return next(err);
        console.log('suggestion id ' + sugg.id);
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

// DELETE Suggestion
router.delete('/:suggestion_id', authCheck,  function (req, res, next) {
    var id = req.params.suggestion_id;
    Suggestion.findById(id).exec(function (err, sugg) {
        if (err) return next(err);

        if (!sugg) return next(); // 404

        sugg.remove(function (err) {
            if (err) return next(err);
            res.send('Deleted');
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


module.exports = router;