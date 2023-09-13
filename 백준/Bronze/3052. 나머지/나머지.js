let input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

input = input.map((el) => Number(el));
input = input.map((el) => el % 42);
let a = [...new Set(input)];
console.log(a.length);