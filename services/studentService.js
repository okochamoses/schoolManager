const studentRepo = require("../repositories/studentRepo");
const logger = require("../config/logger");
const { ServiceResponse, codes } = require("../vo");
const { hashPassword } = require("../utils/security");

exports.getStudent = async (req, res) => {
  const id = req.query.id;
  try {
    const student = await studentRepo.findByID(id);
    if (!student) {
      return res.json(new ServiceResponse(codes.NF_CODE, codes.NF_MSG));
    }
    return res.json(new ServiceResponse(codes.GS_CODE, codes.GS_MSG, student));
  } catch (err) {
    logger.info(`Error getting student with ID of ${id}: ${err}`);
    return res.json(new ServiceResponse(codes.GE_CODE, codes.GE_MSG));
  }
};

exports.updateStudent = async (req, res) => {
  const student = req.body;
  try {
    // Validate student
    const updatedStudent = studentRepo.update(student._id, student);
    return res.json(
      new ServiceResponse(codes.GS_CODE, codes.GS_MSG, updatedStudent)
    );
  } catch (err) {
    logger.info(`Error updating student with ID of ${student._id}: ${err}`);
    return res.json(new ServiceResponse(codes.GE_CODE, codes.GE_MSG));
  }
};
