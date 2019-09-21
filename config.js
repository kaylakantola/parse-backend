require("dotenv").config();

const {
  MONGODB_URI,
  APP_ID,
  MASTER_KEY,
  SERVER_URL,
  MOUNT,
  ADMIN_USERNAME,
  ADMIN_PASSWORD,
  PORT
} = process.env;

module.exports = {
  MONGODB_URI,
  APP_ID,
  MASTER_KEY,
  SERVER_URL,
  MOUNT,
  ADMIN_USERNAME,
  ADMIN_PASSWORD,
  PORT
};
