const adminService = require("../services/adminService")
const router = require("express").Router();

router.get("/", adminService.getAdmin);
router.post("/", adminService.addAdmin);
router.post("/students", adminService.addStudent);

module.exports = router;