const express = require("express");
const router = express.Router();
const userService = require("../services/userService");

router.get("/profile", (req, res) => {
    res.send("Users Route")
});
// router.get("/:id", userService.getUser);
module.exports = router;
