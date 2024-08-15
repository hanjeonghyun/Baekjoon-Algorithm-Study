const [a, b] = require("fs").readFileSync("/dev/stdin").toString().split(" ");

console.log(parseInt(a, b));