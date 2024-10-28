function solution(brown, yellow) {
    var answer = [];
    let block = brown + yellow;
    for (let i = Math.ceil(block / 2); i > 1; i--) {
        if (block % i == 0) {
            let divisor = block / i;
            if ((i - 2) * (divisor - 2) === yellow) {
                answer.push(i);
                answer.push(divisor); 
                break; 
            }
        }
    }
    return answer;
}