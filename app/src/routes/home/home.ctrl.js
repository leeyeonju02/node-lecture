"use strict";
//컨트롤러 파일 : 실제 요청에 해당하는 기능을 수행하는 파일

const User = require("../../models/User");

//view파일과 연결되어 ejs 코드로 이동할 수 있음
const output = {
    home: (req, res) => {
        res.render("home/index");
    },
    login: (req, res) => {
        res.render("home/login");
    },
    register: (req, res) => {
        res.render("home/register");
    }
}

const process = {
    login: (req, res) => {
        //User 클래스 인스턴스화 
        const user = new User(req.body); //이 body는 User의 생성자에게 전달 
        const response = user.login();
        return res.json(response);

    },
    register: (req, res) => {
        //User 클래스 인스턴스화 
        const user = new User(req.body); //이 body는 User의 생성자에게 전달 
        const response = user.register();
        return res.json(response);

    },

}
module.exports = {
    output, process,
}; //hello, logind을 index.js에서 사용할 수 있게 바깥으로 빼주는 역할 







