"use strict";
//로그인 기능을 하는 모델 / UserStorage 데이터와 직접적으로 연결해 기능 수행 

const UserStorage = require("./UserStorage");

class User {
    constructor(body) { //생성자 
        this.body = body;
    }

    login() {
        const body = this.body;
        //UserStoarge 메소드를 호출하고 반환된 object에서 id, psword만 받아준다.
        const { id, psword } = UserStorage.getUserInfo(body.id);

        if (id) { //아이디가 true이면 
            if (id === body.id && psword === body.psword) { //아이디는 이미 트루, psword가 일치하는지 
                return { success: true };
            }
            return { success: false, msg: "비밀번호가 들렸습니다." };
        }
        return { success: false, msg: "존재하지 않은 아이디입니다." };

    }
}

module.exports = User;

