const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// create collection details
// schema creation of collection

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

module.exports = User = mongoose.model("users", UserSchema, 'users');
//                             model is responsible for creating collection
//                              on UserSchema basis
//                              name of the collection will be users
