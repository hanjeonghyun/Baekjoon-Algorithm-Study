const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

let arr = input.map(Number);
let max = Math.max(...arr);

console.log(max);
console.log(arr.indexOf(max) + 1);