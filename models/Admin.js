const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  userID: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    default: ""
  },
  email: {
    type: String
  }
});

adminSchema.methods.toJSON = function() {
  const user = this.toObject();
  delete user.password;
  return user;
};

const Admin = mongoose.model("admins", adminSchema);

module.exports = Admin;
