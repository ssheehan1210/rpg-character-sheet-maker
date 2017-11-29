const express = require('express');
// const request = require('request');
const router = express.Router();
const testmodels = require('../models/testmodels');

router.route('/')
	.get((req, res) => {
		res.render('index', { testmodel: testmodels });
	})

module.exports = router;


