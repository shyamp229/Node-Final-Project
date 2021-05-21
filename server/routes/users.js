const express = require("express");
const router = express.Router();
// load the user model object
const { login, register } = require('../controller/user')
const { isAuthenticated } = require('../controller/auth')


// posts
router.post("/login", login);
router.post("/register", isAuthenticated, register);


module.exports = router;