"use strict";
//데이터와 모델구현 

const fs = require("fs").promises; //파일을 읽을 수 있게 
//파일시스템이 promises를 반환하도록 

class UserStorage {
    //최적화를 위한 은닉화한 메소드 분리 
    static #getUserInfo(data, id) {
        const users = JSON.parse(data);
        const idx = users.id.indexOf(id); //유저가 보낸 아이디가 users안에 몇번 인덱스에 존재하는지
        const usersKeys = Object.keys(users); //위의 데이터 users의 키 값만 리스트 [id, psword, name]
        const userInfo = usersKeys.reduce((newUser, info) => {
            newUser[info] = users[info][idx]; //유저의 아이다 값과 일치하는 인덱스의 키값들을 newUser 오브젝트에 저장
            return newUser;
        }, {});
        return userInfo; //{id:'yeon', psword:'234', name: 'rd2'}
    }

    //필요한 키 값 전체 반환하는 메소드 
    static getUsers(...fields) {
        //const users = this.#users;
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
        //파일 읽기 
        //promise를 반환하게 되면 then()메소드에 접근이 가능하다./promise반환에 대한 오류처리는 catch()로 가능하다
        //마치 fetch api 와 같은 것 fetch도 promise를 반환하며 then() catch()를 사용함 
        return fs
            .readFile("./src/databases/users.json")
            //파일이 잘 읽어졌을 때 데이터를 받아온다
            .then((data) => {
                return this.#getUserInfo(data, id);
            })
            .catch(console.error); //파일읽기 실패시


    }

    //회원가입 시 데이터에 유저의 정보를 저장하는 메소드 
    static save(userInfo) {
        //const users = this.#users;
        users.id.push(userInfo.id);
        users.name.push(userInfo.name);
        users.psword.push(userInfo.psword);

    }
}
//users 변수를 정적변수로 선언함으로써 UserStorage 클래스만으로도 접근이 가능하도록 한다.
//데이터를 쉽게 접근하도록 하는 것은 위험 : 은닉화를 해준다 

module.exports = UserStorage;
