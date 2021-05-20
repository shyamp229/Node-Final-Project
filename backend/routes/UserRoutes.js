const router = require('express').Router();
const jwt = require('jsonwebtoken');
const User = require('../models/UserSchema')
const { LoginRequirement, RegisterRequirement } = require('../controllers/ValidationController')
const { login, register } = require('../controllers/UserController')


// post
router.post('/login', LoginRequirement, login);
router.post('/register', RegisterRequirement, register)



module.exports = router;