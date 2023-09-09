"use strict";
//실제 프론트와 연결되서 실행될 js 파일 
const id = document.querySelector("#id"),
    psword = document.querySelector("#psword"),
    loginBtn = document.querySelector("button");

loginBtn.addEventListener("click", login);

function login() {
    const req = {
        id: id.value,
        psword: psword.value,
    }

    fetch("/login", {
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify(req),
    })
        .then((res) => res.json())
        .then((res) => {
            if (res.success) {
                location.href = "/";
            } else {
                alert(res.msg);
            }
        })
        .catch((err) => {
            console.log("로그인 중 에러 발생");
        });

}
//서버에서 응답한 메시지를 다시 받기 위해 fetch 끝에 then 메소드 사용해준다

