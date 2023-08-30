const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const a = parseInt(input[0]);

for (let b = 1; b <= a; b++) {
  const number = input[b].split(" ");
  const num1 = parseInt(number[0]);
  const num2 = parseInt(number[1]);
  const sum = num1 + num2;
  console.log(`Case #${b}: ${sum}`);
}