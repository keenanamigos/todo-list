const express = require("express");
const path = require("path");
const favicon = require("serve-favicon");
const logger = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({"extended": "false"}));
app.use(express.static(path.join(__dirname, "dist")));

mongoose.Promise = require("bluebird");
mongoose.connect("mongodb://localhost/todo-list", { useMongoClient: true, promiseLibrary: require("bluebird")})
    .then(() => console.log("Connection successful!"))
    .catch((error) => console.error(error));


module.exports = app;