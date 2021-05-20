const express = require("express");
const router = express.Router();
// load the user model object

const { postQuery } = require('../controller/queries')


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
router.post("/", postQuery);

module.exports = router;
