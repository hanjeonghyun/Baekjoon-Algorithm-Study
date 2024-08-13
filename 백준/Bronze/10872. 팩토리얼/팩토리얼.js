const input = require("fs").readFileSync("/dev/stdin").toString().trim();

let result = 1;
for(i = input; i >= 1 ; i--){        
    result = result * i;
}

console.log(result);

