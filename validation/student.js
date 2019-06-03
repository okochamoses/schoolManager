const validator = require("validator");
const isEmpty = require("./is-empty");

const validateRegistration = data => {


  // Username
  if (validator.isEmpty(data.username)) {
    return "Username field cannot be empty";
  }

  if (data.username.length < 3) {
    return "Username must be at least 3 characters";
  }

  // Password
  if (data.password.length === 0) {
    return "Password field cannot be empty";
  }

  if (data.password.length < 8) {
    return "Password must be at least 8 characters";
  }

  if (
    !(
      specialChars.test(data.password) ||
      uppercase.test(data.password) ||
      lowercase.test(data.password) ||
      numeric.test(data.password)
    )
  ) {
    return "Password must contain at least one number, uppercase, lowercase and special character";
  }
  return false;
};

const validateStudent = data => {
    let errors = {};

    // RegEx
    const specialChars = new RegExp("[-@$_.]+");
    const uppercase = new RegExp("/[A-Z]+");
    const lowercase = new RegExp("/[a-z]+");
    const numeric = new RegExp("/d/");
  
    // UserID
    if (data.userID < 3) {
      errors.userID = "User ID does not exist";
    }
  
    if (validator.isEmpty(data.userID)) {
      errors.userID = "User ID field cannot be empty";
    }
  
    // Password
    if (validator.isEmpty(data.password)) {
      errors.password = "Password field cannot be empty";
    }
  
    const empty = is_empty(errors);
  
    return { errors, empty };
  };
  
  module.exports = validateStudent;
