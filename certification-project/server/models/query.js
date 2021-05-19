const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// create collection details
// schema creation of collection

const QuerySchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  data: {
    type: String,
    required: true,
  },
});

module.exports = Query = mongoose.model("queries", QuerySchema);
//                             model is responsible for creating collection
//                              on UserSchema basis
//                              name of the collection will be users
