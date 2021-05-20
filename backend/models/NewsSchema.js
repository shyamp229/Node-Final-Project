const mongoose = require('mongoose');


const NewsSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    url: { type: String, required: true },
    urlToImage: { type: String, required: true },
    publishedAt: { type: Date, default: Date.now() }
}, {
    timestamps: true
})

const News = mongoose.model('News', NewsSchema, 'news');

module.exports = News;