"use strict";

const hello = (req, res) => {
    res.render("home/index"); //도메인에 왔을 때 ejs코드로 이동할 수 있는 코드 
};

const login = (req, res) => {
    res.render("home/login");
};

module.exports = {
    hello,
    login,
}; //hello, logind을 index.js에서 사용할 수 있게 바깥으로 빼주는 역할 