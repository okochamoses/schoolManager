const codes = {
  GS_CODE: 0, // GENERAL_SUCCESS_CODE
  GE_CODE: 10, // GENERAL_ERROR_CODE
  NF_CODE: 11, // NOT_FOUND_CODE
  AF_CODE: 30, // AUTHENTICATION_FAILURE
  NP_CODE: 31, // AUTH_PASSWORD_NULL,
  UU_CODE: 32, // USER_UNAUTHORIZED
  
  GS_MSG: "Successful", // GENERAL_SUCCESS_MESSAGE
  GE_MSG: "Request processing error", // GENERAL_ERROR_MESSAGE
  NF_MSG: "Not found", // NF_CODE_MESSAGE
  AF_MSG: "Authentication Failed", // AUTH_FAILURE_MESSAGE
  NP_MSG: "Password not set", // AUTH_PASSWORD_NULL_MESSAGE,
  UU_MSG: "User unauthorized", // USER_UNAUTHORIZED_MESSAGE,
};

module.exports = codes