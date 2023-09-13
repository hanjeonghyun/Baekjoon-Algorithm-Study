const input = require("fs").readFileSync("/dev/stdin").toString().trim();

const a = input.split("").reverse().join("");
const b = input == a ? 1 : 0;
console.log(b);
