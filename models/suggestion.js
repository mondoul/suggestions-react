var mongoose = require('mongoose');

var suggestionSchema = new mongoose.Schema({
    title: String,
    content: String,
    created: { type: Date, default: Date.now },
    like: { type: Number, default: 0},
    dislike: { type: Number, default: 0}
});

// create a query for comments with a blogpost _id matching `id`
suggestionSchema.statics.findComments = function (id, callback) {
    return this.model('Comment').find({ post: id }, callback);
};

suggestionSchema.statics.likeOrDislike = function (id, isLike, callback) {

    var query = { _id: id };

    var update = { $inc : { }};
    if (isLike) {
        update.$inc.like = 1;
    } else {
        update.$inc.dislike = 1;
    }

    this.update(query, update, function (err, numAffected) {
        if (err) return callback(err);

        if (0 === numAffected) {
            return callback(new Error('no suggestion to modify'));
        }

        callback();
    })
};

suggestionSchema.index({title: 'text', content: 'text' });

var Suggestion = mongoose.model('Suggestion', suggestionSchema);

Suggestion.on('afterRemove', function (sugg) {
    this.model('Comment').remove({ post: sugg._id }).exec(function (err) {
        if (err) {
            console.error('had trouble cleaning up old comments', err.stack);
        }
    })
})

module.exports = Suggestion;