// Primary functionality of each endpoint is implemented here.

const News = require('../models/news');
const validateNewsInput = require("../validations/news");

// post saves new data to mongo db
const addNews = (req, res) => {
    const { errors, isValid } = validateNewsInput(req.body);
    // console.log(isValid);
    // console.log(errors);
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
        .catch(err => res.status(500).json(err));
}
// update one of the data in db
const updateNews = (req, res) => {
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
                return res.status(404).json({ error: "News does not exist" });
            }
            // console.log(JSON.stringify(news));
            res.status(200).json(news);
        })
        .catch((e) => res.status(404).json(e));
}

// delete: removes a data point in db
const deleteNews = (req, res) => {
    const { id } = req.params;
    // console.log(id);
    // id = req.param.id
    News.remove({ _id: id })
        .then((data) => {
            if (data.deletedCount == 0) {
                return res.status(400).json({ error: "Not found" });
            }
            res.status(200).json(data);
        })
        .catch((e) => res.status(404).json(e));
}

// gets one news by id
const getSingleNews = (req, res) => {
    const { id } = req.params;
    // console.log(id);
    News.findOne({ _id: id })
        .then((news) => {
            // console.log(news);
            if (!news) {
                return res.status(404).json({ error: "News does not exist" });
            }
            // console.log(JSON.stringify(news));
            res.status(200).json(news);
        })
        .catch((e) => res.status(404).json(e));
}

// gets all the news in db
const allNews = (req, res) => {
    News.find()
        .then((news) => {
            if (!news) {
                return res.status(404).json({ error: "News does not exist" });
            }
            // console.log(JSON.stringify(news));
            res.status(200).json(news);
        })
        .catch((e) => res.status(404).json(e));
}

// gets latest three news by using mongo query
const threeLatestNews = (req, res) => {
    News.find()
        .limit(3)
        .sort({ publishedAt: -1 })
        .then((news) => {
            if (!news) {
                return res.status(404).json({ error: "News does not exist" });
            }
            // console.log(JSON.stringify(news));
            res.status(200).json(news);
        })
        .catch((e) => res.status(404).json(e));
}



module.exports = { addNews, getSingleNews, updateNews, allNews, threeLatestNews, deleteNews }