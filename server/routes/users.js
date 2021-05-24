const express = require("express");
const router = express.Router();
// load the user model object
const { login, register, findUser } = require('../controller/user')
const { isAuthenticated } = require('../controller/auth')


//get
router.get('/:id', isAuthenticated, findUser);

// posts
router.post("/login", login);
router.post("/register", isAuthenticated, register);


module.exports = router;