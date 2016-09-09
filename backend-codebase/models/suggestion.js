var mongoose = require('mongoose');

var suggestionSchema = new mongoose.Schema({
    title: String,
    content: String,
    author: String,
    created: { type: Date, default: Date.now },
    likes: { type: Number, default: 0},
    voters: []
});

// create a query for comments with a blogpost _id matching `id`
suggestionSchema.statics.findComments = function (id, callback) {
    return this.model('Comment').find({ post: id }, callback);
};

suggestionSchema.statics.likeOrDislike = function (id, email, isLike, callback) {

    var query = { _id: id };

    var update = { $inc : { }, $push : { voters : email}};
    update.$inc.likes = isLike ? 1 : -1;
    console.log('update: ' + JSON.stringify(update));

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