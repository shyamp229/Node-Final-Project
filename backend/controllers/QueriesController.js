const Queries = require('../models/QueriesSchema');

const customerQueries = (req, res) => {
    const customerQueries = new Queries();
    customerQueries.email = req.body.email;
    customerQueries.message = req.body.message;

    customerQueries.save()
        .then(news => res.json(news))
        .catch(err => res.status(500).json(err))
}

const allcustomerQueries = (req, res) => {
    Queries.find()
        .then(queries => res.json(queries))
        .catch(err => res.status(500).json(err))
}

const getSingleQueryById = (req, res) => {
    const { id } = req.params;
    Queries.findOne({ _id: id })
        .then((queries) => {
            console.log(queries);
            if (!queries) {
                return res.status(404).json({ error: "Queries does not exist." });
            }
            res.status(200).json(queries);
        })
        .catch((e) => res.status(404).json(e));
}

module.exports = { customerQueries, allcustomerQueries, getSingleQueryById };