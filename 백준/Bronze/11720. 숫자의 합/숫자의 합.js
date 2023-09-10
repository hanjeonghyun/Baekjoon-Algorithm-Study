const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const a = parseInt(input[0]);
const b = input[1];
let total = 0;

for (let i = 0; i < b.length; i++) {
  total += parseInt(b[i]);
}
console.log(total);