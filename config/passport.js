const passport = require("passport");
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const userRepo = require("../repositories/userRepo");
const logger = require("../config/logger");
const { codes, ServiceResponse } = require("../vo");
const validate = require("validator");
const { comparePassword, generateToken } = require("../utils/security");

const opts = {};

opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.JWT_SECRET;

module.exports = passport.use(
  "user",
  new JwtStrategy({jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), secretOrKey: "incredibleMagma88"}, async (jwt_payload, done) => {
    const userID = jwt_payload.userID
    
    const user = await userRepo.findById(userID);

    if (user) {
      const payload = {
        id: user._id,
        username: user.username,
        firstName: user.firstName,
        lastName: user.lastName,
        userType: user.userType
      };
      return done(null, payload);
    }
    return done(null, false);
  })
);
