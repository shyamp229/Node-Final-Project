const express = require("express");
const router = express.Router();
// load the user model object

const { postQuery } = require('../controller/queries')

// testing query routes
router.get("/test", (req, res) => {
  res.json({ msg: "user test works" });
});


// posts a query to db
router.post("/", postQuery);

module.exports = router;
