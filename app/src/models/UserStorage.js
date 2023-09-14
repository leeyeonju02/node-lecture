"use strict";
//데이터와 모델구현 

const User = require("./User");

class UserStorage {
    static #users = {
        id: ["lee", "yeon", "ju"],
        psword: ["123", "234", "345"],
        name: ["rd", "rd2", "rd3"],
    }
    //필요한 키 값 전체 반환하는 메소드 
    static getUsers(...fields) {
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, fields) => {
            if (users.hasOwnProperty(fields)) {
                newUsers[fields] = users[fields];
            }
            return newUsers;
        }, {});
        return newUsers;
    }
    //키 값에서 유저의 인덱스에 해당하는 모든 키값과 vlaue를 반환하는 메소드 
    static getUserInfo(id) { //id = yeon
        const users = this.#users;
        const idx = users.id.indexOf(id); //유저가 보낸 아이디가 users안에 몇번 인덱스에 존재하는지
        const usersKeys = Object.keys(users); //위의 데이터 users의 키 값만 리스트 [id, psword, name]
        const userInfo = usersKeys.reduce((newUser, info) => {
            newUser[info] = users[info][idx]; //유저의 아이다 값과 일치하는 인덱스의 키값들을 newUser 오브젝트에 저장
            return newUser;
        }, {});
        return userInfo; //{id:'yeon', psword:'234', name: 'rd2'}
    }
    //회원가입 시 데이터에 유저의 정보를 저장하는 메소드 
    static save(userInfo) {
        const users = this.#users;
        users.id.push(userInfo.id);
        users.name.push(userInfo.name);
        users.psword.push(userInfo.psword);

    }
}
//users 변수를 정적변수로 선언함으로써 UserStorage 클래스만으로도 접근이 가능하도록 한다.
//데이터를 쉽게 접근하도록 하는 것은 위험 : 은닉화를 해준다 

module.exports = UserStorage;
