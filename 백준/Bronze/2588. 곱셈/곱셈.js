const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

let a = String(input[0]);
let b = String(input[1]);

let c = b[0];
let d = b[1];
let e = b[2];

console.log(Number(a) * e);
console.log(Number(a) * d);
console.log(Number(a) * c);
console.log(Number(a) * Number(b));
