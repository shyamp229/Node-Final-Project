const mongoose = require('mongoose');

const QueriesSchema = new mongoose.Schema({
    email: { type: String, required: true },
    message: { type: String, required: true }
}, {
    timestamps: true
});

const Queries = mongoose.model('queries', QueriesSchema, 'queries');

module.exports = Queries;