"use strict";

//모듈
const express = require('express');
const app = express()

//라우팅
const home = require("./src/routes/home"); //index.js 만들어준 js 파일을 불러 home에 넣어준다 

//앱세팅 
app.set("views", "./src/views");
app.set("view engine", "ejs");
app.use(express.static(`${__dirname}/src/public`));

//던져진 라우터를 받기 위함
//home폴더 안에 있는 index.js를 읽게 된다. ,루트라는 경로로 들어오면 home으로 보내준다
app.use("/", home); //use - 미들웨어를 등록해주는 메소드 


module.exports = app;