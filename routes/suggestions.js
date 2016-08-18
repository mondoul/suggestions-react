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
        res.send({ message: 'New suggestion created' } );
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