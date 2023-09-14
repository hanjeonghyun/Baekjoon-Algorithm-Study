const input = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ");

let [a, b] = input;
let A = a.split("").reverse().join("");
let B = b.split("").reverse().join("");
let answer = A > B ? A : B;
console.log(answer);