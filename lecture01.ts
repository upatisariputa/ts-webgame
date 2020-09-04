let num: number = 3 as const; // as const를 사용하면 read only가 된다.
let arr: number[] = [1, 2, 3];
const obj: { a: string; b?: number } = { a: "b" }; // 점점 길어지므로, interface를 사용
enum Color {
  Red,
  Green,
  Blue,
}
let c: Color = Color.Green;

// 리턴 있는 함수
function add(a: number, b: number): number {
  return a + b;
}

// 리턴 없는 함수
function _add(a: number, b: number): void {
  console.log(a + b);
}

// 고차 함수
function __add(a: number, b: number): (c: string) => (d: string) => boolean {
  return (c: string) => {
    return (d: string) => {
      return false;
    };
  };
}

// 객체, 오버로딩을 구현해냄
const obj2: { a: (b?: number) => string } = {
  a(b?: number) {
    return "hello";
  },
};

obj2.a();
obj2.a(3);

// never
const arr2: [] = [];
// arr2.push(3); // never 에러가 뜸

// any 아무거나 상관 없음
const hi: any = [];

// 타입 캐스팅 두가지 방법
// const hello: number = 3
// (hello as unknown as string)
// (<string><unknown>hello)

const div = document.createElement("div");
const doNotUnkown = div as HTMLElement; // 서로 상속 관계가 있으므로 unknown을 사용하지 않음

// var num = 3; // as const를 사용하면 read only가 된다.
// var arr = [1, 2, 3];
// var obj = { a: "b" }; // 점점 길어지므로, interface를 사용
// var Color;
// (function (Color) {
//     Color[Color["Red"] = 0] = "Red";
//     Color[Color["Green"] = 1] = "Green";
//     Color[Color["Blue"] = 2] = "Blue";
// })(Color || (Color = {}));
// var c = Color.Green;
// // 리턴 있는 함수
// function add(a, b) {
//     return a + b;
// }
// // 리턴 없는 함수
// function _add(a, b) {
//     console.log(a + b);
// }
// // 고차 함수
// function __add(a, b) {
//     return function (c) {
//         return function (d) {
//             return false;
//         };
//     };
// }
// // 객체, 오버로딩을 구현해냄
// var obj2 = {
//     a: function (b) {
//         return "hello";
//     }
// };
// obj2.a();
// obj2.a(3);
// // never
// var arr2 = [];
// // arr2.push(3); // never 에러가 뜸
// // any 아무거나 상관 없음
// var hi = [];
// // 타입 캐스팅 두가지 방법
// // const hello: number = 3
// // (hello as unknown as string)
// // (<string><unknown>hello)
// var div = document.createElement("div");
// var a = div; // 서로 상속 관계가 있으므로 unknown을 사용하지 않음
