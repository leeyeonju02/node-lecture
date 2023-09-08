"use strict";


const output = {
    home: (req, res) => {
        res.render("home/index");
    },
    login: (req, res) => {
        res.rener("home/login");
    }
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
                })
            }
        }
        return res.json({
            success: false,
            msg: "로그인에 실패하였습니다",
        })


    }
}//컨트롤러에서 해당 body를 보려면 body-patser라는 모듈을 따로 설정해줘야한다. 

module.exports = {
    output, process,
}; //hello, logind을 index.js에서 사용할 수 있게 바깥으로 빼주는 역할 