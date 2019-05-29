const { ServiceResponse, codes } = require("../vo");

const studentGuard = (req, res, next) => {
  return req.user.userType === "ST" ? next() : res.json(new ServiceResponse(codes.UU_CODE, codes.UU_MSG));
};

const teacherGuard = (req, res, next) => {
  return req.user.userType === "TE" ? next() : res.json(new ServiceResponse(codes.UU_CODE, codes.UU_MSG));
};

const guardianGuard = (req, res, next) => {
  return req.user.userType === "GU" ? next() : res.json(new ServiceResponse(codes.UU_CODE, codes.UU_MSG));
};

const adminGuard = (req, res, next) => {
  return req.user.userType === "GU" ? next() : res.json(new ServiceResponse(codes.UU_CODE, codes.UU_MSG));
};

module.exports = { studentGuard, teacherGuard, guardianGuard, adminGuard };
