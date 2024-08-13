const input = require("fs").readFileSync("/dev/stdin").toString().trim();

let transformed = input.split('').map((e) => {
  if (e === e.toUpperCase()) {
    return e.toLowerCase();
  } else {
    return e.toUpperCase();
  }
}).join(''); 

console.log(transformed);
