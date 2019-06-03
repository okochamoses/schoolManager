const mongoose = require("mongoose");

const classSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  presidingTeacher: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "teachers"
  },
  classRep: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "students"
  },
  AsstClassRep: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "students"
  },
  madatorySubjects: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "subjects"
    }
  ]
});

const Class = new mongoose.model("classes", classSchema);

module.exports = Class;
