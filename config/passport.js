const passport = require("passport");
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const userRepo = require("../repositories/userRepo");
const adminRepo = require("../repositories/adminRepo");
const logger = require("../config/logger");
const { codes, ServiceResponse } = require("../vo");
const validate = require("validator");
const { comparePassword, generateToken } = require("../utils/security");

const opts = {};

opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.JWT_SECRET;

const getAuthGuard = (userType) => {
  switch (userType) {
    case "student":
      return studentRepo;
      break;
    case "admin":
      return adminRepo;
      break;
    case "teacher":
      return teacherRepo;
      break;
    case "guardian":
      return guardianRepo;
      break;
    default:
      
      break;
  }
}

module.exports = passport.use(
  "user",
  new JwtStrategy(opts, async (jwt_payload, done) => {
    const userID = jwt_payload.userID
    const method = getAuthGuard(jwt_payload.userType);
    
    const user = await method.findByID(userID);

    if (user) {
      const payload = {
        id: user._id,
        userID: user.userID,
        firstName: user.firstName,
        lastName: user.lastName,
        userType: jwt_payload.userType
      };
      return done(null, payload);
    }
    return done(null, false);
  })
);
