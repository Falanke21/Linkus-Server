var express = require('express');
var router = express.Router();
const { Post } = require('../models/post')
const { mongoose } = require('../db/mongoose')

/* POST login. */
router.post('/', function(req, res, next) {
	const user = new User({
		category: req.body.category,
		publisher: req.body.publisher,
		type: req.body.type,
		courseId: req.body.courseId,
		sectionId: req.body.sectionId,
		content: req.body.content,
		privacy: req.body.privacy,
		status: req.body.status,
		attended: [],
		requested: []
	})

	User.findByEmailPassword(email, password).then((user) => {
	    if (!user) {
			console.log(`Can't find user with email: ${email}`);
            res.send({
				authorized: false
			});
        } else {
			// Valid email address and password
			// More code in /models/user.js
			console.log(`Authorized user with email: ${email}`);
            res.send({
				authorized: true
			})
        }
    }).catch((error) => {
		res.status(500).send();
    })
});

module.exports = router;
