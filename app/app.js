"use strict";
//메인파일


//모듈
const express = require('express');
const bodyParser = require("body-parser"); //req.body 데이터를 가져올 떄 필요한 바디파서 모듈설치 
const app = express()

//라우팅
const home = require("./src/routes/home"); //index.js 만들어준 js 파일을 불러 home에 넣어준다 

//앱세팅 
app.set("views", "./src/views");
app.set("view engine", "ejs");
app.use(express.static(`${__dirname}/src/public`));
app.use(bodyParser.json()); //바디파서가 이것만 모듈설치만 하면 안됌
app.use(bodyParser.urlencoded({ extended: true }));
//url을 통해 전달되는 데이터에 한글, 공백등과 같으 문서가 제대로 인식되지 않는 문제 해결 


//던져진 라우터를 받기 위함
//home폴더 안에 있는 index.js를 읽게 된다. ,루트라는 경로로 들어오면 home으로 보내준다
app.use("/", home); //use - 미들웨어를 등록해주는 메소드 


module.exports = app;