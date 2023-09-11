const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const [H, M] = input[0].split(" ").map(Number);
let time = parseInt(input[1]);
let resultH = H;
let resultM = M + time;

if (resultM >= 60) {
  resultH += Math.floor(resultM / 60);
  resultM %= 60;
}

if (resultH >= 24) {
  resultH %= 24;
}

console.log(`${resultH} ${resultM}`);