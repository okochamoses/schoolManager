const adminRepo = require("../repositories/adminRepo");
const studentRepo = require("../repositories/studentRepo");
const logger = require("../config/logger");
const { ServiceResponse, BaseResponse, codes } = require("../vo");
const { hashPassword } = require("../utils/security");

exports.addStudent = async (req, res) => {
  const body = req.body;
  try {
    // TODO: validate student before saving

    // hash password
    const password = hashPassword(body.password);
    body.password = password;
    await studentRepo.add(body);
    return res.json(new ServiceResponse(codes.GS_CODE, codes.GS_MSG));
  } catch (err) {
    logger.error(`Error adding student with body ${body.userID}: ${err}`);
    return new ServiceResponse(codes.GE_CODE, codes.GE_MSG);
  }
};

exports.getAdmin = async (req, res) => {
  const id = req.query.id;
  try {
    const admin = await adminRepo.findByID(id);
    if (admin === null) {
      return res.json(new ServiceResponse(codes.GE_CODE, "Admin not found"));
    }
    return res.json(new ServiceResponse(codes.GS_CODE, codes.GS_MSG, admin));
  } catch (err) {
    logger.info(`Error getting admin with ID of ${id}: ${err}`);
    return res.json(new ServiceResponse(codes.GE_CODE, codes.GE_MSG));
  }
};

exports.addAdmin = async (req, res) => {
  const body = req.body;
  try {
    // TODO: validate student before saving

    // hash password
    const password = hashPassword(body.password);
    body.password = password;

    await adminRepo.add(body);
    return res.json(new ServiceResponse(codes.GS_CODE, codes.GS_MSG));
  } catch (err) {
    logger.error(`Error adding admin with UserID of ${body.userID}: ${err}`);
    return res.json(new ServiceResponse(codes.GE_CODE, codes.GE_MSG));
  }
};
