const express = require("express");
const router = express.Router();
const { isAuthenticated } = require('../controller/auth')
// load the user model object

const { 
  postQuery,
  allcustomerQueries,
  getSingleQueryById } = require('../controller/queries')

// testing query routes
router.get("/test", (req, res) => {
  res.json({ msg: "user test works" });
});

// get

router.get('/allcustomerQueries', isAuthenticated, allcustomerQueries);

router.get('/getSingleQuery/:id', isAuthenticated, getSingleQueryById);


// posts a query to db
router.post("/", postQuery);

module.exports = router;
