var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;

var comment = new mongoose.Schema({
    content: { type: String, trim: true, validate: validateText },
    post: { type: ObjectId, index: true },
    date: { type: Date, default: Date.now }
});

function validateText (str) {
    return str.length < 250;
}

module.exports = mongoose.model('Comment', comment);