const router = require('express').Router();
const News = require('../models/NewsSchema');


router.get('/', (req, res) => {
    res.send("Router is running!!");
});

router.post('/addNews', (req, res) => {

    const addNews = new News();

    addNews.title = req.body.title;
    addNews.description = req.body.description;
    addNews.url = req.body.url;
    addNews.urlToImage = req.body.urlToImage;
    addNews.publishedAt = req.body.publishedAt;

    addNews.save()
        .then(news => res.json(news))
        .catch(err => res.status(500).json(err))

})

router.get('/allNews', (req, res) => {
    News.find()
        .then(news => res.json(news))
        .catch(err => res.status(500).json(err))
})

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

router.delete('/deleteNews/:id', (req, res) => {
    // const { id } = req.params
    const id = req.params.id;
    News.findByIdAndDelete(id)
        .then(data => res.json(data))
        .catch(err => res.status(500).json(err))
})

router.put('/editNews/:id', (req, res) => {
    const id = req.params.id;
    console.log(id);
    News.findOneAndUpdate({ id }, {
        $set: {
            title: req.body.title,
            description: req.body.description,
            url: req.body.url,
            urlToImage: req.body.urlToImage,
            publishedAt: req.body.publishedAt,
        }
    }, (err, result) => {
        if (err) res.send('Error updating document!!');
        else res.send({ message: 'Document updated successfully!!' });
    })
})

module.exports = router;
