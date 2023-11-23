const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const T = parseInt(input.shift());

const answer = input.map((e) => {
  const [a, b] = e.split(" ").map(Number);

  const powerMod10 = (base, exponent) => {
    if (exponent === 0) return 1;
    if (exponent % 2 === 0) {
      const halfPower = powerMod10(base, exponent / 2);
      return (halfPower * halfPower) % 10;
    } else {
      return (base * powerMod10(base, exponent - 1)) % 10;
    }
  };

  const result = powerMod10(a, b);

  return result === 0 ? 10 : result;
});

console.log(answer.join("\n"));