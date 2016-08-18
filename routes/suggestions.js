var express = require('express');
var router = express.Router();
var mongoose = require('mongoose')
var Suggestion = mongoose.model('Suggestion');
var Comment = mongoose.model('Comment');

// POST Suggestion
router.post('/', function(req, res, next) {
    var title = req.body.title;
    var content = req.body.content;

    Suggestion.create({
        title: title,
        content: content
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
        .exec(function(err, data) {
            if (err) return next(err);

            res.send(data);
        });

});

// GET Suggestion
router.get('/:suggestion_id', function(req, res, next) {
    var id = req.params.suggestion_id;
    var commentsPromise = Suggestion.findComments(id)
                                    .sort('created')
                                    .select('-_id') // exclude the _id
                                    .exec();

    Suggestion.findById(id).exec(function (err, sugg) {
        if (err) return next(err);

        if (!sugg) return next(); // 404

        res.send({suggestion: sugg, comments: commentsPromise});
    });
});

// DELETE Suggestion
router.delete('/:suggestion_id', function (req, res, next) {
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
router.put('/:suggestion_id/like', function (req, res, next) {
    Suggestion.likeOrDislike(req.params.suggestion_id, true, function (err) {
        if (err) return next(err);

        res.send({ message : 'Vote accepted!'});
    });
});

// PUT Suggestion, update counters
router.put('/:suggestion_id/dislike', function (req, res, next) {
    Suggestion.likeOrDislike(req.params.suggestion_id, false, function (err) {
        if (err) return next(err);

        res.send({ message : 'Vote accepted!'});
    });});


module.exports = router;