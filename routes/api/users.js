const express = require('express');
const router = express.Router();
// const gravatar = require('gravatar');
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// const config = require('config');
// const { check, validationResult } = require('express-validator');

// const User = require('../../models/User');

// @route    POST api/users
// @desc     Register user
// @access   Public
router.get('/', (req, res) => {
    res.send(('User Route'));
});

module.exports = router;