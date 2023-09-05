const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

for (i = 0; i < input.length; i++) {
  let A = parseInt(input[i].split(" ")[0]);
  let B = parseInt(input[i].split(" ")[1]);
  let result = A + B;
  console.log(result);
}