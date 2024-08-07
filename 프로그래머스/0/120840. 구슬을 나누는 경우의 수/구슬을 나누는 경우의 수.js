function factorial(n) {
    let answer = 1;
    for (let i = n; i > 0; i--) {
        answer *= i; 
    }
    return answer; 
}

function solution(balls, share) {
    return Math.round(factorial(balls) / (factorial(balls - share) * factorial(share)));
}