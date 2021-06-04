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

const allcustomerQueries = (req, res) => {
    Query.find()
        .then(queries => res.json(queries))
        .catch(err => res.status(500).json(err))
}

const getSingleQueryById = (req, res) => {
    const { id } = req.params;
    Query.findOne({ _id: id })
        .then((queries) => {
            console.log(queries);
            if (!queries) {
                return res.status(404).json({ error: "Queries does not exist." });
            }
            res.status(200).json(queries);
        })
        .catch((e) => res.status(404).json(e));
}


module.exports = { postQuery, allcustomerQueries, getSingleQueryById }