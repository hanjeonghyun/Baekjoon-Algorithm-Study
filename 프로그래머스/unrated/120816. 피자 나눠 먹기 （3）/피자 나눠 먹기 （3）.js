function solution(slice, n) {
    var answer = 0;
    if (n % slice >= 1) {
        answer = Math.floor(n / slice) + 1;
    } else {
        answer = Math.floor(n / slice);
    }
    return answer;
}