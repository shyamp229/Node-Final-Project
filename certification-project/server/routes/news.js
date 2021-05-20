const express = require("express");
const router = express.Router();

// const objectId = require("mongodb").ObjectID;
const { isAuthenticated } = require('../controller/auth')
const {
  addNews,
  getSingleNews,
  updateNews,
  allNews,
  threeLatestNews,
  deleteNews } = require('../controller/news')

// get
router.get("/", (req, res) => {
  res.send("Hello from rest");
});
router.get("/allNews", allNews);
router.get("/threeLatestNews", threeLatestNews);
router.get("/getSingleNews/:id", getSingleNews);

// post
router.post("/addNews", isAuthenticated, addNews);

// update
router.put("/updateNews/:id", isAuthenticated, updateNews);

// deletes
router.delete("/deleteNews/:id", isAuthenticated, deleteNews);

module.exports = router;
