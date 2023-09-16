const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

let [a, b] = input;
console.log(a * b);