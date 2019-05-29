const User = require("../models/User");

// DB ACTION: READ
const find = () => {
  return User.find();
};

const count = () => {
  return User.countDocuments();
};

const findByStatus = isActive => {
  return User.find({ isActive });
};

const countByStatus = isActive => {
    return User.countDocuments({isActive})
}

const findByUsername = username => {
  return User.findOne({ username })
};

const findByEmail = email => {
  return User.findOne({ email });
};

const findById = id => {
  return User.findById(id);
};

// DB ACTION: CREATE
const add = body => {
  const user = new User(body);
  return user.save();
};

// DB ACTION: UPDATE
const update = (id, data) => {
  return User.findOneAndUpdate(id, { $set: data });
};

module.exports = {
  find,
  count,
  findByUsername,
  findByEmail,
  findById,
  findByStatus,
  countByStatus,
  add,
  update
};
