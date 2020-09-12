const express = require('express');
const router = express.Router();

// @route GET api/users
// @desc Test Route
// access Public

router.get('/users', (req, res) => res.send('Users Route'));

module.exports = router;