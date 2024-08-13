const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);

const expr = (A, B) => {
  return (A + B) * (A - B);
};

console.log(expr(...input));
