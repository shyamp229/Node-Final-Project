const router = require('express').Router();
const jwt = require('jsonwebtoken');
const User = require('../models/UserSchema')
const { login, register } = require('../controllers/UserController')


router.post('/login', login);
router.post('/register', register)



module.exports = router;