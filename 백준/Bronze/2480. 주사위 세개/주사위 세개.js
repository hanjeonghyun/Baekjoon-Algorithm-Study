const input = require("fs").readFileSync("/dev/stdin").toString().split(' ');

let a = parseInt(input[0]);
let b = parseInt(input[1]);
let c = parseInt(input[2]);

if (a === b && b === c && a === c) {
  console.log(10000 + a * 1000);
} else if (a === b || b === c || a === c) {
  console.log(1000 + (a === b ? a : c) * 100);
} else if (a !== b && b !== c && a !== c) {
  console.log(Math.max(a,b,c) * 100);
}