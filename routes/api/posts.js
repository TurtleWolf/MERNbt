const express = require('express');
const router = express.Router();

// @route    POST api/users
// @desc     Register Posts
// @access   Public
router.get('/', (req, res) => {
    res.send(('Posts Route'));
});

module.exports = router;