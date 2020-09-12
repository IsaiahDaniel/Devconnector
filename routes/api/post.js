const express = require('express');
const router = express.Router();

// @route GET api/profile
// @desc Test Route
// access Public

router.get('/post', (req, res) => res.send('post Route'));

module.exports = router;