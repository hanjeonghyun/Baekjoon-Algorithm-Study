const input = require("fs").readFileSync("/dev/stdin").toString();

const a = [];

for (let i = 97; i <= 122; i++) {
  a.push(input.indexOf(String.fromCharCode(i)));
}

console.log(a.join(" "));