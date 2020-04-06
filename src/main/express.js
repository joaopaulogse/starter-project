const express = require("express");
require("./setup");
const server = express();


server.use(require("./routes"))

module.exports = server;