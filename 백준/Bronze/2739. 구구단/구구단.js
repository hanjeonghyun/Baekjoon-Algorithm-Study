const input = require("fs").readFileSync("/dev/stdin").toString();
const number = Number(input);

for (let a = 1; a <= 9; a++) {
  console.log(number,"*",a,"=",number * a);
}