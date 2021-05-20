const router = require('express').Router();
const { isAuthenticated } = require('../Auth/AuthController');
const Queries = require('../controllers/QueriesController');

// get
router.get('/', (req, res) => {
    res.send("Queries Router is running!!");
});
router.get('/allcustomerQueries', isAuthenticated, Queries.allcustomerQueries);

router.get('/getSingleQuery/:id', isAuthenticated, Queries.getSingleQueryById);


//post
router.post('/customerQuery', Queries.customerQueries);

module.exports = router;


