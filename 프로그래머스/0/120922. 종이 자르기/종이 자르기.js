function solution(M, N) {
    var answer = 0;
    if (M !== 0 && N !== 0) {
        answer = (M * N) - 1;
    }
    return answer;
}