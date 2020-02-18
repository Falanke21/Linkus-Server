/* Post model */
'use strict';

const mongoose = require('mongoose')

// Making a Mongoose model a little differently: a Mongoose Schema
// Allows us to add additional functionality.
const PostSchema = new mongoose.Schema({

})


// make a model using the Post schema
const Post = mongoose.model('Post', PostSchema)
module.exports = { Post }

