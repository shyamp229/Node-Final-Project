const express = require("express");
const router = express.Router();
// load the user model object

const objectId = require("mongodb").ObjectID;
const News = require("../models/news");

// register validation method

const validateNewsInput = require("../validations/news");
// login validation method

const key = require("../config/config");
const { update } = require("../models/news");
const { isValidObjectId } = require("mongoose");
router.get("/", (req, res) => {
  res.send("Hello from rest");
});

router.post("/addNews", (req, res) => {
  const { errors, isValid } = validateNewsInput(req.body);
  console.log(isValid);
  console.log(errors);
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const addNews = new News({
    title: req.body.title,
    description: req.body.description,
    url: req.body.url,
    urlToImage: req.body.urlToImage,
    publishedAt: req.body.publishedAt,
  });
  addNews
    .save()
    .then((news) => res.status(201).json(news))
    .catch();
});

router.get("/getSingleNews/:id", (req, res) => {
  const { id } = req.params;
  console.log(id);
  News.findOne({ _id: id })
    .then((news) => {
      console.log(news);
      if (!news) {
        return res.status(404).json({ error: "there is no data" });
      }
      console.log(JSON.stringify(news));
      res.status(200).json(news);
    })
    .catch((e) => res.status(404).json(e));
});

router.put("/updateNews/:id", (req, res) => {
  const { id } = req.params;
  const { errors, isValid } = validateNewsInput(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }

  News.updateOne(
    { _id: id },
    {
      $set: {
        title: req.body.title,
        description: req.body.description,
        url: req.body.url,
        urlToImage: req.body.urlToImage,
        publishedAt: req.body.publishedAt,
      },
    }
  )
    .then((news) => {
      if (!news) {
        return res.status(404).json({ error: "there is no data" });
      }
      // console.log(JSON.stringify(news));
      res.status(200).json(news);
    })
    .catch((e) => res.status(404).json(e));
});

router.get("/allNews", (req, res) => {
  News.find()
    .then((news) => {
      if (!news) {
        return res.status(404).json({ error: "there is no data" });
      }
      console.log(JSON.stringify(news));
      res.status(200).json(news);
    })
    .catch((e) => res.status(404).json(e));
});

router.get("/threeLatestNews", (req, res) => {
  News.find()
    .limit(3)
    .sort({ publishedAt: -1 })
    .then((news) => {
      if (!news) {
        return res.status(404).json({ error: "there is no data" });
      }
      console.log(JSON.stringify(news));
      res.status(200).json(news);
    })
    .catch((e) => res.status(404).json(e));
});

router.delete("/deleteNews/:id", (req, res) => {
  const { id } = req.params;
  console.log(id);
  // id = req.param.id
  News.remove({ _id: id })
    .then((data) => {
      if (data.deletedCount == 0) {
        return res.status(400).json({ error: "not found" });
      }
      res.status(200).json(data);
    })
    .catch((e) => res.status(404).json(e));
});

module.exports = router;
