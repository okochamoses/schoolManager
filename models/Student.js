const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  middleName: {
    type: String
  },
  gender: {
    type: String,
    required: true
  },
  dateOfBirth: {
    type: Date
  },
  registrationDate: {
    type: Date,
    default: Date.now()
  },
  subjects: [{ type: mongoose.Schema.Types.ObjectId, ref: "subjects" }],
  image: {
    type: String,
    default: "anonymous.png"
  },
  class: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "classes"
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

studentSchema.methods.toJSON = function() {
  const user = this.toObject();
  delete user.password;
  return user;
};

const Student = mongoose.model("students", studentSchema);

module.exports = Student;
