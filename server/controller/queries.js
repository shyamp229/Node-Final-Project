// Primary functionality of each endpoint is implemented here.

const Query = require('../models/query')

// saves customer messages to mongo db
const postQuery = (req, res) => {
    const newQuery = new Query({
        email: req.body.email,
        message: req.body.message,
    });
    newQuery
        .save()
        .then((query) => res.status(201).json(query))
        .catch((err) => res.status(400).send(err));
}


module.exports = { postQuery }