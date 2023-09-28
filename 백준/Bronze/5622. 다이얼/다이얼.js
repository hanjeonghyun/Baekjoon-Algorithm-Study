const input = require("fs").readFileSync("/dev/stdin").toString().split("");
let answer = 0;

for (let i = 0; i < input.length; i++) {
  if (input[i] == 1) {
    answer += 2;
  } else if (input[i] == "A" || input[i] == "B" || input[i] == "C") {
    answer += 3;
  } else if (input[i] == "D" || input[i] == "E" || input[i] == "F") {
    answer += 4;
  } else if (input[i] == "G" || input[i] == "H" || input[i] == "I") {
    answer += 5;
  } else if (input[i] == "J" || input[i] == "K" || input[i] == "L") {
    answer += 6;
  } else if (input[i] == "M" || input[i] == "N" || input[i] == "O") {
    answer += 7;
  } else if (
    input[i] == "P" ||
    input[i] == "Q" ||
    input[i] == "R" ||
    input[i] == "S"
  ) {
    answer += 8;
  } else if (input[i] == "T" || input[i] == "U" || input[i] == "V") {
    answer += 9;
  } else if (
    input[i] == "W" ||
    input[i] == "X" ||
    input[i] == "Y" ||
    input[i] == "Z"
  ) {
    answer += 10;
  }
}

console.log(answer);