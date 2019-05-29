const userRepo = require("../repositories/userRepo");
const logger = require("../config/logger");
const validateRegistration = require("../validation/registration");
const { codes, ServiceResponse } = require("../vo");
const validate = require("validator");
const {
  hashPassword,
  comparePassword,
  generateToken
} = require("../utils/security");

const register = async (req, res, next) => {
  const response = new ServiceResponse(codes.GE_CODE, codes.GE_MSG);
  try {
    const user = req.body;
    logger.info(`Registering user with username: ${user.username}`);

    // Validate user entries
    const validationError = validateRegistration(user);
    if (validationError) {
      return res.json({ validationError });
    }

    // Check if username already exists
    const existingUsername = await userRepo.findByUsername(user.username);
    const existingEmail = await userRepo.findByEmail(user.email);

    if (existingUsername) {
      response.description = "User with this username already exists";
      return res.json(response);
    }

    if (existingEmail) {
      response.description = "User with this email already exists";
      return res.json(response);
    }

    // Hash user password
    const password = hashPassword(user.password);
    user.password = password;

    // Compile user data
    userRepo.add(user);

    response.status = codes.GS_CODE;
    response.description = codes.GS_MSG;

    return res.json(response);
  } catch (err) {
    logger.error(`User Registration Failed with error: ${err.message}`);
    return res.json(response);
  }
};

const login = async (req, res, next) => {
  const response = new ServiceResponse(codes.AF_CODE, codes.AF_MSG);
  const userID = req.body.userID;
  const password = req.body.password;
  try {
    let user = null;
    if (validate.isEmail(userID)) {
      user = await userRepo.findByEmail(userID);
    } else {
      user = await userRepo.findByUsername(userID);
    }

    // Check if user exists
    if (!user) {
      response.status = codes.GE_CODE;
      response.description = "Invalid login credentials";
      return res.json(response);
    }

    // Check Password
    if (comparePassword(password, user.password)) {
      const payload = {
        userID: user._id,
        username: user.username,
        userType: user.userType
      };
      response.status = codes.GS_CODE;
      response.description = codes.GS_MSG;
      response.data = { token: generateToken(payload) };

      return res.json(response);
    }
    return res.json(response);
  } catch (err) {
    logger.error(`Error logging user in with message: ${err.message}`);
    
    response.status = codes.GE_CODE;
    response.description = codes.GE_MSG;
    return res.json(response);
  }
};

module.exports = {
  register,
  login
};
