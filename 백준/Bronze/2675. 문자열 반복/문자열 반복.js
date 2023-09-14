const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const total = parseInt(input[0]);

for (let i = 1; i <= total; i++) {
  let [count, words] = input[i].split(" ");
  let spellingsArray = words.split("");
  let result = "";
  for (let j = 0; j < spellingsArray.length; j++) {
    for (let k = 0; k < count; k++) {
      result += words[j];
    }
  }
  console.log(result);
}