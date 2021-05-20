const router = require('express').Router();
const News = require('../controllers/NewsController')
const { isAuthenticated } = require('../Auth/AuthController')
// const News = require('../models/NewsSchema');

// get
router.get('/', (req, res) => {
    res.send("Router is running!!");
});
router.get('/allNews', News.allNews);
router.get("/threeLatestNews", News.threeLatestNews);
router.get("/getSingleNews/:id", News.getSingleNews);

// post
router.post('/addNews', isAuthenticated, News.addNews);

// update
router.put('/editNews/:id', isAuthenticated, News.editNews);

// delete
router.delete('/deleteNews/:id', isAuthenticated, News.deleteNews);

module.exports = router;
