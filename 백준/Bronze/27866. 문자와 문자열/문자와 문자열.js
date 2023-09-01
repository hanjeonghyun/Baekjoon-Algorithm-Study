const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const word = input[0].toString();
const order = parseInt(input[1]);

console.log(word[order-1]);