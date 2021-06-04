const express = require("express");
const router = express.Router();


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
// get routes to retrieve data for news
router.get("/allNews", allNews);
router.get("/threeLatestNews", threeLatestNews);
router.get("/getSingleNews/:id", getSingleNews);

// post saves data to mongo db
router.post("/addNews", isAuthenticated, addNews);

// update data on mongo db
router.put("/updateNews/:id", isAuthenticated, updateNews);

// deletes data in database.
router.delete("/deleteNews/:id", isAuthenticated, deleteNews);

module.exports = router;
