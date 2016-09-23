import mongoose from 'mongoose';
const ObjectId = mongoose.Schema.Types.ObjectId;

let comment = new mongoose.Schema({
    content: { type: String, trim: true, validate: validateText },
    author: String,
    post: { type: ObjectId, index: true },
    date: { type: Date, default: Date.now }
});

function validateText (str) {
    return str.length < 250;
}

export default mongoose.model('Comment', comment);