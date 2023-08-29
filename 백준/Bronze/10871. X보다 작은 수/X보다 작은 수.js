const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

let a = input[0].split(" ").map(Number);
let b = input[1].split(" ").map(Number);

let arr1 = b.filter(function (data) {
  return data < a[1];
});

console.log(arr1.join(" "));