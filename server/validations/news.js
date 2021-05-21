const isEmpty = require("./is-empty");
const Validator = require("validator");
module.exports = function validationNewsInput(data) {
  let errors = {};

  data.title = !isEmpty(data.title) ? data.title : "";
  data.description = !isEmpty(data.description) ? data.description : "";
  data.url = !isEmpty(data.url) ? data.url : "";
  data.urlToImage = !isEmpty(data.urlToImage) ? data.urlToImage : "";
  data.publishedAt = !isEmpty(data.publishedAt) ? data.publishedAt : "";

  if (Validator.isEmpty(data.title)) {
    errors.title = "Title field is required";
  }

  if (Validator.isEmpty(data.description)) {
    errors.description = "Description Field is required";
  }
  if (Validator.isEmpty(data.urlToImage)) {
    errors.urlToImage = "URL to Image field is required";
  }

  if (data.publishedAt == "") {
    errors.publishedAt = "Published At Field is required";
  }

  if (Validator.isEmpty(data.url)) {
    errors.url = "URL Field is required";
  }

  // here we may  rcv errors send these error message to register api===> will send it client/ consumer
  // we need to share 2 status : value , error : {}  JSON object
  return {
    isValid: isEmpty(errors),
    errors,
  };
};
