const express = require("express");
const path = require("path");
const favicon = require("serve-favicon");
const logger = require("morgan");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({"extended": "false"}));
app.use(express.static(path.join(__dirname, "dist")));


module.exports = app;