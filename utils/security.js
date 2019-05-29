const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

hashPassword = password => {
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(password, salt);
  return hash;
};

comparePassword = (password, hash) => {
  return bcrypt.compareSync(password, hash);
};

generateToken = data => {
  const secret = process.env.JWT_SECRET || "incredibleMagma";
  const expiry = parseInt(process.env.JWT_TOKEN_EXPIRY || 300);

  return jwt.sign(data, secret, {
    expiresIn: expiry
  });
};

module.exports = { hashPassword, comparePassword, generateToken };
