const mongoose = require("mongoose");

const gradeSchema = new mongoose.Schema({
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "students",
    required: true
  },
  studentClass: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "classes",
    required: true
  },
  subject: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "subjects",
    required: true
  },
  score: {
    type: Number,
    required: true
  },
  total: {
    type: Number,
    required: true
  },
  type: {
    type: Number,
    required: true
  },
  term: {
      type: Number,
      required: true
  }
});

const Grade = mongoose.model("grades", gradeSchema);

module.exports = Grade;
