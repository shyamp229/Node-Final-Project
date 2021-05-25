const isEmpty = require("./is-empty");
const Validator = require("validator");

// register backend validator
module.exports = function validationRegisterInput(data) {
  let errors = {};

  data.name = !isEmpty(data.name) ? data.name : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";

  if (!Validator.isLength(data.name, { min: 2, max: 30 })) {
    errors.name = "Name must be between 2 and 30 charachters";
  }

  if (Validator.isEmpty(data.name)) {
    errors.name = "Name field is required";
  }
  if (Validator.isEmpty(data.email)) {
    console.log("inside email empty");
    errors.email = "Email field is required";
  } else if (!Validator.isEmail(data.email)) {
    console.log("inside invalid email");
    errors.email = "Email is invalid";
  }
  if (Validator.isEmpty(data.password)) {
    errors.password = "Password Field is required";
  }
  if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = "Password must be at least 6 characters";
  }

  // here we may  rcv errors send these error message to register api===> will send it client/ consumer
  // we need to share 2 status : value , error : {}  JSON object
  return {
    isValid: isEmpty(errors),
    errors,
  };
};
