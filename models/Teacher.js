const mongoose = require("mongoose");

const teacherSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  middleName: {
    type: String,
    required: true
  },
  title: {
    type: String
  },
  userID: {
    type: String,
    required: true,
    unique: true
  },
  subjects: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "subjects"
    }
  ]
});

teacherSchema.methods.toJSON = function() {
  const user = this.toObject();
  delete user.password;
  return user;
};

const Teacher = new mongoose.model("teachers", teacherSchema);

module.exports = Teacher;
