const input = require("fs").readFileSync("/dev/stdin").toString().trim();
const a = Number(input);

for (let i = 1; i <= a; i++) {
  console.log(" ".repeat(a - i) + "*".repeat(i + (i - 1)));
}
for (let j = a - 1; j > 0; j--) {
  console.log(" ".repeat(a - j) + "*".repeat(j + (j - 1)));
}