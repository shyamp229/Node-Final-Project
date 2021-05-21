const Query = require('../models/query')

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