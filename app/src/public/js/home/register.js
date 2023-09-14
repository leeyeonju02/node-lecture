"use strict";
//실제 프론트와 연결되서 실행될 js 파일 
const id = document.querySelector("#id"),
    name = document.querySelector("#name"),
    psword = document.querySelector("#psword"),
    confirmPsword = document.querySelector("#confirm-psword"),
    registerBtn = document.querySelector("#button");

registerBtn.addEventListener("click", register);

function register() {
    const req = {
        id: id.value,
        name: name.value,
        confirmPsord: confirmPsword.value,
        psword: psword.value,
    };


    fetch("/register", {
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify(req),
    })
        .then((res) => res.json())
        .then((res) => {
            if (res.success) {
                location.href = "/login";
            } else {
                alert(res.msg);
            }
        })
        .catch((err) => {
            console.log("회원가입중 에러 발생");
        });

}
//서버에서 응답한 메시지를 다시 받기 위해 fetch 끝에 then 메소드 사용해준다

