const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const number = parseInt(input);
let sum = 0;

for (let a = 0; a <= number; a++){
  sum += a;
}

console.log(sum);