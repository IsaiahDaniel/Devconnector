const express = require('express');
const router = express.Router();

// @route GET api/profile
// @desc Test Route
// access Public

router.get('/profile', (req, res) => res.send('Profile Route'));

module.exports = router;