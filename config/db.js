const mongoose = require("mongoose");
const logger = require("./logger");

const mongoUrl = `mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${
  process.env.DB_HOST
}:${process.env.DB_PORT}/${process.env.DB_NAME}`;

mongoose
  .connect(mongoUrl, { useNewUrlParser: true, useCreateIndex: true })
  .then(() => logger.info("Connection Established"))
  .catch(err => logger.error(err.message));
