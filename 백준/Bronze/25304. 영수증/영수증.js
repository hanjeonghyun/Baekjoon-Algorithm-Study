const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const sum = parseInt(input[0]);
const count = parseInt(input[1]);
let c = 0;

for (let a = 2; a <= count + 1; a++) {
  const number = input[a].split(" ");
  let b = parseInt(number[0]) * parseInt(number[1]);
   c += b;
}
let result = c === sum ? "Yes" : "No";
console.log(result);