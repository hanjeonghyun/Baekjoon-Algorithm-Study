const input = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ");

let H = parseInt(input[0]);
let M = parseInt(input[1]);

M -= 45;

if (M < 0) {
  if (H === 0) {
    console.log(H + 23, M + 60);
  } else {
    console.log(H - 1, M + 60);
  }
} else {
  console.log(H, M);
}