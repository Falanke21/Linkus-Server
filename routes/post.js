var express = require("express");
var router = express.Router();
const { Post } = require("../models/post");
const { mongoose } = require("../db/mongoose");

/* POST a new post. */
router.post("/", function (req, res, next) {
    console.log("Enter the router");
    const post = new Post({
        category: req.body.category,
        publisher: req.body.publisher,
        type: req.body.type,
        courseId: req.body.courseId,
        sectionId: req.body.sectionId,
        content: req.body.content,
        privacy: req.body.privacy,
        status: req.body.status,
        attended: [],
        requested: [],
    });
    console.log("post created");

    post.save().then(
        (post) => {
            res.send(post);
        },
        (error) => {
            res.status(400).send(error);
        }
    );
});

module.exports = router;
