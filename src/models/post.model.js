import mongoose from 'mongoose';

const post = mongoose.Schema({
    imagePath: {type: String , isRequired: true},
    imageContentType: {type: String , isRequired: true},
    date: {type: Date, default: Date.now},
    author: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    comments: [{type: mongoose.Schema.Types.ObjectId, ref: 'Comment'}],
    content: {type: String},
    likes: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}]
});

export default mongoose.model('Post', post);