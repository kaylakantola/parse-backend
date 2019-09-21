const { ParseServer } = require("parse-server");
const ParseDashboard = require("parse-dashboard");
const path = require("path");
const express = require("express");
const app = express();

const {
  MONGODB_URI,
  APP_ID,
  MASTER_KEY,
  SERVER_URL,
  MOUNT,
  ADMIN_USERNAME,
  ADMIN_PASSWORD,
  PORT
} = require("./config");

const apiOptions = {
  appName: APP_ID,
  cloud: __dirname + "/cloud/main.js",
  databaseURI: MONGODB_URI,
  appId: APP_ID,
  masterKey: MASTER_KEY,
  serverURL: SERVER_URL
};

const dashboardConfig = {
  apps: [
    {
      serverURL: SERVER_URL,
      appId: APP_ID,
      masterKey: MASTER_KEY,
      appName: APP_ID
    }
  ],
  users: [
    {
      user: ADMIN_USERNAME,
      pass: ADMIN_PASSWORD
    }
  ]
};

const dashboardOptions = {
  allowInsecureHTTP: true
};

const api = new ParseServer(apiOptions);
const dashboard = new ParseDashboard(dashboardConfig, dashboardOptions);

// Serve the Parse API on the /parse URL prefix
app.use(MOUNT, api);
app.use("/dashboard", dashboard);
app.listen(PORT, () => {
  console.log(`Yay! We're up and running! Listening on port: ${PORT}`);
});
