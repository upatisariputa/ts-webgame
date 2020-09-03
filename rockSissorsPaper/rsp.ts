let imgCoords: RSP[keyof RSP] = "0"; // 타입을 세부적으로 지정해줘야함
// const rsp = { ROCK: '0', SCISSORS: '-142px', PAPER: '-284px' } as const;
interface RSP {
  ROCK: "0";
  SCISSORS: "-142px";
  PAPER: "-284px";
}

const rsp: RSP = {
  ROCK: "0",
  SCISSORS: "-142px",
  PAPER: "-284px",
} as const;

function computerChoice(imgCoords: RSP[keyof RSP]): keyof RSP {
  return (Object.keys(rsp) as ["ROCK", "SCISSORS", "PAPER"]).find((k) => rsp[k] === imgCoords)!;
}

let interval: number;
function intervalMaker() {
  interval = setInterval(function () {
    if (imgCoords === rsp.ROCK) {
      imgCoords = rsp.SCISSORS;
    } else if (imgCoords === rsp.SCISSORS) {
      imgCoords = rsp.PAPER;
    } else {
      imgCoords = rsp.ROCK;
    }
    if (document.querySelector("#computer")) {
      // document.querySelector("#computer") as HTMLElement 강제 형변환
      (document.querySelector("#computer") as HTMLElement).style.background = "url(https://en.pimg.jp/023/182/267/1/23182267.jpg) " + imgCoords + " 0";
    }
  }, 100);
}

intervalMaker();

const score = { ROCK: 0, SCISSORS: 1, PAPER: -1 } as const;

document.querySelectorAll(".btn").forEach((btn) => {
  btn.addEventListener("click", function (this: HTMLButtonElement, e: Event) {
    // this를 사용할때는 this를 지정해줘야함
    clearInterval(interval);
    setTimeout(() => {
      intervalMaker();
    }, 2000);
    const myChoice = this.textContent as keyof RSP;
    const myScore = score[myChoice]; // any 에러가 나오면 as 로 타입을 지정해줘야함
    const computerScore = score[computerChoice(imgCoords)];
    const diff = myScore - computerScore;
    if (diff === 0) {
      console.log("비김");
    } else if ([-1, 2].includes(diff)) {
      console.log("이김");
    } else {
      console.log("짐");
    }
  });
});
