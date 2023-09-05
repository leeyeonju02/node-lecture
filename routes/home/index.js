"use strict";

const express = require("express");
const router = express.Router(); //라우터 변수를 사용하기 위해선 .Router()를 따로 불러와야한다.

const ctrl = require("./home.ctrl");

router.get("/", ctrl.hello);
router.get("/login", ctrl.login);
//실제 라우터는 /, /login 등 이 도메인에 들어왔을 때 클라이언트의 요청을 연결해주는 부분
//실제 클라이언트의 요청에 해당하는 기능을 수행하는 부분은 뒤에 콜백함수 : 컨트롤러 (req, res) => {res.render("home/login");})


//라우터를 외부 파일에서 사용할 수 있게 외부파일에 던져준다. - 이 라우터를 사용할 수 있게 던져준다
module.exports = router; 