const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

let a = +input[0];
let b = input[1].split(' ').map(Number);
let c = +input[2];
let count = 0;

for (let i = 0; i < a ; i++){
    if (c == b[i]){
        count++;
    }
}
console.log(count);
