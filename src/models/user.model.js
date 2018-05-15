import mongoose from 'mongoose';
import {generateHashedPassword} from '../utils/encryption';

const user = mongoose.Schema({
    username: {type: String, unique: true, validate: {
        validator: (value) => (value.length > 3),
        message: 'Username should be at least 3 characters long.'
    }},
    salt: {type: String, required: true },
    password: {type: String, required: true, validate: {
        validator:(value) => (value.length > 3),
        message: 'Password should be at least 3 characters long.'
    }},
    followers: {},
    followings: {},
    posts: [{type: mongoose.Schema.Types.ObjectId, ref: 'Post'}],
    comments: [{type: mongoose.Schema.Types.ObjectId, ref: 'Comment'}],
    bio: {type: String},
    avatar: {type: String, default: '//some default picture'}
});

user.methods.authenticate = function(password) {
    return generateHashedPassword(password, this.salt) === this.password;
};

export default mongoose.model('User', user);