const arr: Array<number> = [1, 2, 3, 4, 5, 6];
let sum: number;
const hello = () => {
  for (let i = 0; i < arr.length; i++) {
    sum += i;
  }
  return String(sum);
};
hello();
