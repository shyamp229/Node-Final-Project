const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// create collection details
// schema creation of collection

const NewsSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  urlToImage: {
    type: String,
    required: true,
  },
  publishedAt: {
    type: String,
    required: true,
  },
});

module.exports = News = mongoose.model("news", NewsSchema);
//                             model is responsible for creating collection
//                              on UserSchema basis
//                              name of the collection will be users
