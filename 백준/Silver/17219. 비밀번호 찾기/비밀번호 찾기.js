const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const cases = input[0];
const [n, t] = cases.split(" ").map(Number);
let dict = {};

for (let i = 1; i <= n; i++) {
  let [site, pw] = input[i].split(" ");
  dict[site] = pw;
}

for (let i = n + 1; i <= n + t; i++) {
  let search = input[i];
  console.log(dict[search]);
}
