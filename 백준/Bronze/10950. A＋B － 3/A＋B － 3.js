const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const a = parseInt(input[0]);

for (let b = 1; b <= a; b++) {
  const number = input[b].split(" ");
  const sum = parseInt(number[0]) + parseInt(number[1]);
  console.log(sum);
}