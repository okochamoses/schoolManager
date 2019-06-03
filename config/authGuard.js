const { ServiceResponse, codes } = require("../vo");

const studentGuard = (req, res, next) => {
  return req.user.userType === "student" || req.user.userType === "admin"
    ? next()
    : res.json(new ServiceResponse(codes.UU_CODE, codes.UU_MSG));
};

const teacherGuard = (req, res, next) => {
  return req.user.userType === "teacher"
    ? next()
    : res.json(new ServiceResponse(codes.UU_CODE, codes.UU_MSG));
};

const guardianGuard = (req, res, next) => {
  return req.user.userType === "guardian"
    ? next()
    : res.json(new ServiceResponse(codes.UU_CODE, codes.UU_MSG));
};

const adminGuard = (req, res, next) => {
  return req.user.userType === "admin"
    ? next()
    : res.json(new ServiceResponse(codes.UU_CODE, codes.UU_MSG));
};

module.exports = { studentGuard, teacherGuard, guardianGuard, adminGuard };
