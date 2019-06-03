const express = require("express");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const logger = require("./config/logger");
const dotenv = require("dotenv");
const {studentGuard} = require("./config/authGuard")

// Read environment variables from .env file
dotenv.config();

const passport = require("./config/passport");

// Database Connection
require("./config/db");

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const studentRouter = require("./routes/student");
const adminRouter = require("./routes/admin");
const authRouter = require("./routes/auth");

const app = express();

// Passport
app.use(passport.initialize());
const passportGuard = passport.authenticate("user", {session: false, failureRedirect: "/api" });

app.use(morgan("combined", { stream: logger.stream }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/api", indexRouter);
app.use("/api/auth", authRouter);
app.use("/api/users", [passportGuard, studentGuard], usersRouter);
app.use("/api/students", [passportGuard, studentGuard], studentRouter);
app.use("/api/admin", adminRouter);

module.exports = app;
