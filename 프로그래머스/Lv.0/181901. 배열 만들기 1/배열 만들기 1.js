function solution(n, k) {
    var answer = [];
    for (let i=1; k * i <= n; i++) {
        answer.push(k * i);
    }
    return answer;
}