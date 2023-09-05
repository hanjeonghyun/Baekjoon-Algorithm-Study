const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const class1 = input.sort();

for (i = 1; i <= 30; i++) {
  if (!class1.includes(i.toString())) {
    console.log(i);
  }
}
