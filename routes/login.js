var express = require('express');
var router = express.Router();
const { User } = require('../models/user')
const { mongoose } = require('../db/mongoose')

/* POST login. */
router.post('/', function(req, res, next) {
	const email = req.body.email;
	const password = req.body.password;

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
