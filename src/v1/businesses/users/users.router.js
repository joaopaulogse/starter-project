const express = require("express");

const Router = express.Router();


const Controller = require("./users.controller");
const controller = new Controller();

Router
    .route("/")
    .get(controller.show.bind(controller))
    .post(controller.store.bind(controller))

module.exports = Router;