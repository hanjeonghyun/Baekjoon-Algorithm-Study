const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const days = input[0];
const plan = input[1].split(" ").map(Number);
const study = input[2].split(" ").map(Number);
let count = 0;

for (let i = 0; i < days; i++) {
  if (plan[i] <= study[i]) {
    count += 1;
  }
}
console.log(count);