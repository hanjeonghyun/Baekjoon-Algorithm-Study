function solution(n) {
    var answer = n <= 7 ? 1 : n % 7 >= 1 ? n / 7 + 1 : n / 7;
    return Math.floor(answer);
}