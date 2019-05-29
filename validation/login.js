const validator = require("validator");
const is_empty = require("./is-empty");

const validateLogin = data => {
  let errors = {};

  // Username
  if (data.username < 3) {
    errors.username = "User ID does not exist";
  }

  if (validator.isEmpty(data.username)) {
    errors.username = "User ID field cannot be empty";
  }

  // Password
  if (validator.isEmpty(data.password)) {
    errors.password = "Password field cannot be empty";
  }

  const empty = is_empty(errors);

  return { errors, empty };
};

module.exports = validateLogin;
