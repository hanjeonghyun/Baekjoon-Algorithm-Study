const input = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ");

let a = input.length;
for (let i = 0; i < input.length; i++) {
  if (input[i] == "") {
    a -= 1;
  }
}
console.log(a);