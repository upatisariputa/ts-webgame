const { body } = document;
let candidateBaseball: number[];
let arrayBaseBall: number[] = [];
function chooseNumber(): void {
  candidateBaseball = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  arrayBaseBall = [];
  for (let i = 0; i < 4; i++) {
    const chosen = candidateBaseball.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
    arrayBaseBall.push(chosen);
  }
}

chooseNumber();
console.log(arrayBaseBall);

const resultBaseball = document.createElement("h1");
body.append(resultBaseball);
const formBaseball = document.createElement("form");
document.body.append(formBaseball);
const inputBaseball = document.createElement("input");
formBaseball.append(inputBaseball);
inputBaseball.type = "text";
inputBaseball.maxLength = 4;
const buttonBaseball = document.createElement("button");
buttonBaseball.textContent = "input";
formBaseball.append(buttonBaseball);

let wrongCountBaseball = 0;
formBaseball.addEventListener("submit", (event) => {
  event.preventDefault();
  const answer = inputBaseball.value;
  if (answer === arrayBaseBall.join("")) {
    resultBaseball.textContent = "HomeRun";
    inputBaseball.value = "";
    inputBaseball.focus();
    chooseNumber();
    wrongCountBaseball = 0;
  } else {
    const answerArrayBaseball = answer.split("");
    let strikeBaseball = 0;
    let ballBaseball = 0;
    wrongCountBaseball += 1;
    if (wrongCountBaseball > 10) {
      resultBaseball.textContent = `Over 10 counts. The answer is ${arrayBaseBall.join(",")}`;
      inputBaseball.value = "";
      inputBaseball.focus();
      chooseNumber();
      wrongCountBaseball = 0;
    } else {
      console.log("답 틀리면", answerArrayBaseball);
      for (let i = 0; i <= 3; i++) {
        if (Number(answerArrayBaseball[i]) === arrayBaseBall[i]) {
          console.log("같은 자리");
          strikeBaseball += 1;
        } else if (arrayBaseBall.indexOf(Number(answerArrayBaseball[i])) > -1) {
          console.log("겹치는 숫자");
          ballBaseball += 1;
        }
      }
      resultBaseball.textContent = strikeBaseball + " strike " + ballBaseball + " ball";
      inputBaseball.value = "";
      inputBaseball.focus();
    }
  }
});

// var body = document.body;
// var candidateBaseball;
// var arrayBaseBall = [];
// function chooseNumber() {
//     candidateBaseball = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//     arrayBaseBall = [];
//     for (var i = 0; i < 4; i++) {
//         var chosen = candidateBaseball.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
//         arrayBaseBall.push(chosen);
//     }
// }
// chooseNumber();
// console.log(arrayBaseBall);
// var resultBaseball = document.createElement("h1");
// body.append(resultBaseball);
// var formBaseball = document.createElement("form");
// document.body.append(formBaseball);
// var inputBaseball = document.createElement("input");
// formBaseball.append(inputBaseball);
// inputBaseball.type = "text";
// inputBaseball.maxLength = 4;
// var buttonBaseball = document.createElement("button");
// buttonBaseball.textContent = "input";
// formBaseball.append(buttonBaseball);
// var wrongCountBaseball = 0;
// formBaseball.addEventListener("submit", function (event) {
//     event.preventDefault();
//     var answer = inputBaseball.value;
//     if (answer === arrayBaseBall.join("")) {
//         resultBaseball.textContent = "HomeRun";
//         inputBaseball.value = "";
//         inputBaseball.focus();
//         chooseNumber();
//         wrongCountBaseball = 0;
//     }
//     else {
//         var answerArrayBaseball = answer.split("");
//         var strikeBaseball = 0;
//         var ballBaseball = 0;
//         wrongCountBaseball += 1;
//         if (wrongCountBaseball > 10) {
//             resultBaseball.textContent = "Over 10 counts. The answer is " + arrayBaseBall.join(",");
//             inputBaseball.value = "";
//             inputBaseball.focus();
//             chooseNumber();
//             wrongCountBaseball = 0;
//         }
//         else {
//             console.log("답 틀리면", answerArrayBaseball);
//             for (var i = 0; i <= 3; i++) {
//                 if (Number(answerArrayBaseball[i]) === arrayBaseBall[i]) {
//                     console.log("같은 자리");
//                     strikeBaseball += 1;
//                 }
//                 else if (arrayBaseBall.indexOf(Number(answerArrayBaseball[i])) > -1) {
//                     console.log("겹치는 숫자");
//                     ballBaseball += 1;
//                 }
//             }
//             resultBaseball.textContent = strikeBaseball + " strike " + ballBaseball + " ball";
//             inputBaseball.value = "";
//             inputBaseball.focus();
//         }
//     }
// });
