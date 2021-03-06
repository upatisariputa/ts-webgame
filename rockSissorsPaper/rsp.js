"use strict";
var imgCoords = "0"; // 타입을 세부적으로 지정해줘야함
var rsp = {
    ROCK: "0",
    SCISSORS: "-142px",
    PAPER: "-284px"
};
function computerChoice(imgCoords) {
    return Object.keys(rsp).find(function (k) { return rsp[k] === imgCoords; });
}
var interval;
function intervalMaker() {
    interval = setInterval(function () {
        if (imgCoords === rsp.ROCK) {
            imgCoords = rsp.SCISSORS;
        }
        else if (imgCoords === rsp.SCISSORS) {
            imgCoords = rsp.PAPER;
        }
        else {
            imgCoords = rsp.ROCK;
        }
        if (document.querySelector("#computer")) {
            // document.querySelector("#computer") as HTMLElement 강제 형변환
            document.querySelector("#computer").style.background = "url(https://en.pimg.jp/023/182/267/1/23182267.jpg) " + imgCoords + " 0";
        }
    }, 100);
}
intervalMaker();
var score = { ROCK: 0, SCISSORS: 1, PAPER: -1 };
document.querySelectorAll(".btn").forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        // this를 사용할때는 this를 지정해줘야함
        clearInterval(interval);
        setTimeout(function () {
            intervalMaker();
        }, 2000);
        var myChoice = this.textContent;
        var myScore = score[myChoice]; // any 에러가 나오면 as 로 타입을 지정해줘야함
        var computerScore = score[computerChoice(imgCoords)];
        var diff = myScore - computerScore;
        if (diff === 0) {
            console.log("비김");
        }
        else if ([-1, 2].includes(diff)) {
            console.log("이김");
        }
        else {
            console.log("짐");
        }
    });
});
