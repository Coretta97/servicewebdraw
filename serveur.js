import express from "express";
import consign from "consign";
var bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

consign()
    .include("models")
    .then("libs/middlewares.js")
    .then("routes")
    .then("libs/boot.js")
    .into(app);