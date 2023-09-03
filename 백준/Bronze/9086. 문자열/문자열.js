const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const count = input[0];
const a = input[1];
const b = input[2];
const c = input[3];

console.log(a.charAt(0)+a.charAt(a.length - 1));
console.log(b.charAt(0)+b.charAt(b.length - 1));
console.log(c.charAt(0)+c.charAt(c.length - 1));
