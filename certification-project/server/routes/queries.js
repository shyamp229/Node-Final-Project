const express = require("express");
const router = express.Router();
// load the user model object

const Query = require("../models/query");

//@route /api/users/test
//Method : GET
//@Desc : tests user route
//@access : public

router.get("/test", (req, res) => {
  res.json({ msg: "user test works" });
});

// method : post
// send the response code 201 = success
// 400 = bad req
//
router.post("/", (req, res) => {
  const newQuery = new Query({
    email: req.body.email,
    data: req.body.query,
  });
  newQuery
    .save()
    .then((query) => res.status(201).json(query))
    .catch((err) => res.status(400).send(err));
});

module.exports = router;
