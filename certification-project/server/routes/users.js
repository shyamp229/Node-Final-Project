const express = require("express");
const router = express.Router();
// load the user model object
const { login, register } = require('../controller/user')


// posts
router.post("/login", login);
router.post("/register", register);


module.exports = router;