import mongoose from 'mongoose';
const ObjectId = mongoose.Schema.Types.ObjectId;

const categorySchema = new mongoose.Schema({
    title: { type: String, trim: true, validate: (str) => { return str.length < 140;}},
    author: String
});

export default mongoose.model('Category', categorySchema);
