const Admin = require("../models/Admin");

exports.add = async body => {
  const admin = new Admin(body);
  const newAdmin = await admin.save();
  return newAdmin;
};

exports.findByUserID = async userID => {
  const admin = await Admin.findOne({ userID: userID });
  return admin;
};

exports.findByID = async id => {
  const admin = await Admin.findById(id);
  return admin;
};
