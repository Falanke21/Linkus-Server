/* Post model */
'use strict';

const mongoose = require('mongoose')

// Making a Mongoose model a little differently: a Mongoose Schema
// Allows us to add additional functionality.
const PostSchema = new mongoose.Schema({
    category: {
        type: String
    },

    publisher: {
        type: String,
        required: true
    },
    type: {
        type: Number
    },
    courseId: {
        type: String
    },
    sectionId: {
        type: String
    },
    content: {
        type: String
    },
    publishTime: {
        type: Date,
        default: Date.now
    },
    activateTime: {
        type: Date,
        default: Date.now
    },
    privacy: {
        type: Boolean
    },
    status: {
        type: Number
    },
    attended: [{memberId: String}],
    requested: [{reqId: String, message: String}]
})


// make a model using the Post schema
const Post = mongoose.model('Post', PostSchema)
module.exports = { Post }

