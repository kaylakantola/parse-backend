const express = require("express");
const { ParseServer } = require("parse-server");
const ParseDashboard = require("parse-dashboard");
const path = require("path");
const {
  MONGODB_URI,
  APP_ID,
  MASTER_KEY,
  SERVER_URL,
  PARSE_MOUNT,
  ADMIN_USERNAME,
  ADMIN_PASSWORD
} = require("./config");

const api = new ParseServer({
  databaseURI: MONGODB_URI,
  cloud: __dirname + "/cloud/main.js",
  appId: APP_ID,
  masterKey: MASTER_KEY,
  serverURL: SERVER_URL,
  liveQuery: {
    classNames: ["Posts"]
  }
});

const dashboardOptions = {
  allowInsecureHTTP: true
};

const dashboard = new ParseDashboard(
  {
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
  },
  dashboardOptions
);

const app = express();

// Serve the Parse API on the /parse URL prefix
app.use(PARSE_MOUNT, api);
app.use("/dashboard", dashboard);

const port = 1337;

const httpServer = require("http").createServer(app);
httpServer.listen(port, () =>
  console.log(`Aaand we're up! Listening on port ${port}`)
);

// This will enable the Live Query real-time server
ParseServer.createLiveQueryServer(httpServer);
