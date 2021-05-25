const express = require("express");
const router = express.Router();
// load the user model object
const { login, register, findUser } = require('../controller/user')
const { isAuthenticated } = require('../controller/auth')

// using isAuthentiated as middleware before actually functionality occurs

//gets user by id
router.get('/:id', isAuthenticated, findUser);

// posts: logs user in and registers
router.post("/login", login);
router.post("/register", isAuthenticated, register);


module.exports = router;