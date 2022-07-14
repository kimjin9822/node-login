const express = require("express");
const app = express();

app.set("views", "./views");
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("home/index");
});

app.get("/login", (req, res) => {
    res.render("home/login");
});

app.listen(3000, () => {
    console.log("http로 가동된 서버입니다.");
});