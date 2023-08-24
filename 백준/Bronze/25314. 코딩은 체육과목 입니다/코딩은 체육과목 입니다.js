const input = require("fs").readFileSync("/dev/stdin").toString().trim();

const number = parseInt(input);
let byte = number / 4;

for (i = 1; i <= byte; i++) {
  result = "long ".repeat(i) + "int";
}
console.log(result);