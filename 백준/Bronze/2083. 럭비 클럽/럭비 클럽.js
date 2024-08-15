const input = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((e) => {
    e = e.trim().split(" ");
    const [name, age, weight] = e;
    if (Number(age) > 17 || Number(weight) >= 80) {
      return `${name} Senior`;
    } else {
      return `${name} Junior`;
    }
  });

input.pop();
console.log(input.join("\n"));