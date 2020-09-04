let numberOne = Math.ceil(Math.random() * 9);
let numberTwo = Math.ceil(Math.random() * 9);
let resultGugudan = numberOne * numberTwo;

const wordGugudan = document.createElement("div");
wordGugudan.textContent = `${numberOne} X ${numberTwo} = ? `;
document.body.append(wordGugudan);

const formGugudan = document.createElement("form");
document.body.append(formGugudan);

const inputGugudan = document.createElement("input");
inputGugudan.type = "number";
formGugudan.append(inputGugudan);

const buttonGugudan = document.createElement("button");
buttonGugudan.textContent = "input";
formGugudan.append(buttonGugudan);

const resultDivGugudan = document.createElement("div");
document.body.append(resultDivGugudan);

formGugudan.addEventListener("submit", (e) => {
  e.preventDefault();
  if (resultGugudan === +inputGugudan.value) {
    resultDivGugudan.textContent = "True";
    numberOne = Math.ceil(Math.random() * 9);
    numberTwo = Math.ceil(Math.random() * 9);
    resultGugudan = numberOne * numberTwo;
    wordGugudan.textContent = `${numberOne} X ${numberTwo} = ? `;
    inputGugudan.value = "";
    inputGugudan.focus();
  } else {
    resultDivGugudan.textContent = "False";
    inputGugudan.value = `${numberOne} X ${numberTwo} = ?`;
    inputGugudan.focus();
  }
});
