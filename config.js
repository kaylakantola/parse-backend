require("dotenv").config();

const {
  DATABASE_URI,
  APP_ID,
  MASTER_KEY,
  SERVER_URL,
  MOUNT,
  ADMIN_USERNAME,
  ADMIN_PASSWORD
} = process.env;

module.exports = {
  DATABASE_URI,
  APP_ID,
  MASTER_KEY,
  SERVER_URL,
  MOUNT,
  ADMIN_USERNAME,
  ADMIN_PASSWORD
};
