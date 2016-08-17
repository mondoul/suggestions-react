var express = require('express');
var router = express.Router();
var mongoose = require('mongoose')
var Suggestion = mongoose.model('Suggestion');

/* POST suggestion */
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

module.exports = router;