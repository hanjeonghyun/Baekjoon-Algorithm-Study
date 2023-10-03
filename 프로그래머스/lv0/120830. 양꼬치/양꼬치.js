function solution(n, k) {
    var answer = 0;
    let a = Math.floor(n / 10);
    answer = (12000 * n + (k * 2000)) - (a * 2000)
    return answer;
}