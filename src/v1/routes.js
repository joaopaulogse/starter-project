const express = require("express");

const Router = express.Router();

Router.use("/users", require("./businesses/users/users.router"));

module.exports = Router;