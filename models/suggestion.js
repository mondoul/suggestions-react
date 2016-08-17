var mongoose = require('mongoose');

var comment = new mongoose.Schema({
    content: String,
    date: { type: Date, default: Date.now }
});

var suggestionSchema = new mongoose.Schema({
    title: String,
    content: String,
    created: { type: Date, default: Date.now },
    like: { type: Number, default: 0},
    dislike: { type: Number, default: 0},
    comments: [comment]
});

suggestionSchema.index({title: 'text', content: 'text' });

module.exports = mongoose.model('Suggestion', suggestionSchema);