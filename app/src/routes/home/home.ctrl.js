"use strict";


const output = {
    hello: (req, res) => {
        res.render("home/index");
    },
    login: (req, res) => {
        res.render("home/login");
    },
    register: (req, res) => {
        res.render("home/register");
    },
};

const process = {
    login: (req, res) => {
        console.log(req.body);
    },
};

module.exports = {
    output,
    process,
};