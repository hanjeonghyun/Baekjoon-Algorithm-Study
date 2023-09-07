const input = require("fs").readFileSync("/dev/stdin").toString().split(" ");

const numbers = input.map(Number);

if (numbers.length >= 6) {
  const a = numbers[0];
  const b = numbers[1];
  const c = numbers[2];
  const d = numbers[3];
  const e = numbers[4];
  const f = numbers[5];

  console.log(
    `${1 - a}`,
    `${1 - b}`,
    `${2 - c}`,
    `${2 - d}`,
    `${2 - e}`,
    `${8 - f}`
  );
}