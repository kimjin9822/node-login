"use strict";

//모듈
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

//라우팅
const home = require("./src/routes/home");

//앱 세팅
app.set("views", "./src/views");
app.set("view engine", "ejs");
app.use(express.static(`${__dirname}/src/pubilc`));
app.use(bodyParser.json());

// url을 통해 전달되는 데이터에 한글, 공백 같은 문자 포함시 제대로 작동하게 해줌
app.use(bodyParser.urlencoded({ extended: true}));

app.use("/", home);

module.exports = app;