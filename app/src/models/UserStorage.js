"use strict";

class UserStorage {
    static #users = {
        id: ["lee", "yeon", "ju"],
        psword: ["123", "234", "345"],
        name: ["rd", "rd2", "rd3"],
    }
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
}
//users 변수를 정적변수로 선언함으로써 UserStorage 클래스만으로도 접근이 가능하도록 한다.
//데이터를 쉽게 접근하도록 하는 것은 위험 : 은닉화를 해준다 



module.exports = UserStorage;