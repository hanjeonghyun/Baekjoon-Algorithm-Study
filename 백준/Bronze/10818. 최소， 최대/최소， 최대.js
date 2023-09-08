const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const a = parseInt(input[0]);
const b = input[1].split(" ").map(Number);
b.sort((a, b) => a - b);
console.log(b[0], b[b.length - 1]);