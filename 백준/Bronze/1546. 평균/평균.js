const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

let count = input[0];
let scores = input[1].split(" ");
let max = Math.max(...scores);
let result = 0;
scores = scores.map((el) => (el / max) * 100);
for (let i = 0; i < scores.length; i++) {
  result += scores[i];
}
console.log(result / count);