"use strict";
//컨트롤러 파일 : 실제 요청에 해당하는 기능을 수행하는 파일

//view파일과 연결되어 ejs 코드로 이동할 수 있음
const output = {
    home: (req, res) => {
        res.render("home/index");
    },
    login: (req, res) => {
        res.render("home/login");
    },
}

const users = {
    id: ["lee", "yeon", "ju"],
    psword: ["123", "234", "345"],
}

const process = {
    login: (req, res) => {
        const id = req.body.id,
            psword = req.body.psword;

        if (users.id.includes(id)) {
            const idx = users.id.indexOf(id);
            if (users.psword[idx] === psword) {
                return res.json({
                    success: true,
                });
            }
        }
        return res.json({
            success: false,
            msg: "로그인에 실패하셨습니다."
        })
    }
}

//컨트롤러에서 해당 body를 보려면 body-patser라는 모듈을 따로 설정해줘야한다. 

module.exports = {
    output, process,
}; //hello, logind을 index.js에서 사용할 수 있게 바깥으로 빼주는 역할 