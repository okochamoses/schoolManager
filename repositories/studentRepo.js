const Student = require("../models/Student");

exports.add = async body => {
  const student = new Student(body);
  const newStudent = await student.save();
  return newStudent;
};

exports.findByID = async id => {
  return await Student.findById(id);
};

exports.update = async (id, body) => {
  const student = await Student.findOneAndUpdate(id, { $set: body });
  return student;
};
