var express = require('express');
var router = express.Router();
const { User } = require('../models/user')
const { mongoose } = require('../db/mongoose')

/* POST signup. */
router.post('/', function(req, res, next) {
	const user = new User({
		email: req.body.email,
		password: req.body.password
	})
	console.log(`user email is ${req.body.email}, user password is ${req.body.password}`);

	// Save the user
	user.save().then((user) => {
		res.send(user)
	}, (error) => {
		res.status(400).send(error) // 400 for bad request
	})
});

module.exports = router;
