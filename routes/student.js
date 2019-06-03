const studentService = require("../services/studentService")
const router = require("express").Router();

router.get("/", studentService.getStudent);
router.put("/", studentService.updateStudent);

module.exports = router;