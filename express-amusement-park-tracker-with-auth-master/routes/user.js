const express = require('express');

const router = express.Router();
const db = require('../db/models');

const { csrfProtection, asyncHandler } = require('./utils');

router.get('/user/register', csrfProtection, asyncHandler((req, res) => {
    const newUser = db.User.build()
    res.render('user-register', { newUser, title: 'register', csrfToken: req.csrfToken() })
}))

router.post('/user/register', csrfProtection, asyncHandler((req, res) => {

}))

module.exports = router;
