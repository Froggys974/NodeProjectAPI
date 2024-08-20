
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
    name: {
        type: String,
        required: 'Le nom est requis'
    },
    message: {
        type: String,
        required: 'Le message est requis'
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    post_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post',
        required: true
    }
});

module.exports = mongoose.model('Comment', CommentSchema);
