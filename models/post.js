/* Post model */
'use strict';

const mongoose = require('mongoose')

// Making a Mongoose model a little differently: a Mongoose Schema
// Allows us to add additional functionality.
const PostSchema = new mongoose.Schema({
    category: {
        type: String,
        required: true,
    },

    publisher: String,
    type: Number,
    courseId: String,
    sectionId: String,
    content: String,
    publishTime: Date,
    activateTime: Date,
    privacy: Boolean,
    status: Number,
    attended: [{memberId: String}],
    requested: [{reqId: String, message: String}]
})


// make a model using the Post schema
const Post = mongoose.model('Post', PostSchema)
module.exports = { Post }

