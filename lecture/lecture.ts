interface A {
  hello: true;
}
interface B {
  bye: true;
}
type C = { hi: false };
const a: A = { hello: true };
const b: B = { bye: true };
// 인터섹션, 유니언
const c: A & B & C = { hello: true, bye: true, hi: false };

const resultCall = Array.prototype.map.call<number[], [(item: number) => string], string[]>([1, 2, 3], (item) => {
  return item.toFixed(1);
});

function makeGender(target: typeof Person) {
  console.log("hello");
  return class extends target {
    gender = "male";
    sayGender() {
      return this.gender;
    }
  };
}
@makeGender
class Person {
  title: string;
  age = 27;
  constructor() {
    this.title = name;
  }
  setTitle(title: string) {}
  sayTitle(): any {
    return this.title;
  }
}
