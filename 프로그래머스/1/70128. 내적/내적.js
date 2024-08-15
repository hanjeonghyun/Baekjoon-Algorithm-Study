function solution(a, b) {
    return a.map((e, idx) => e * b[idx]).reduce((sum, num) => sum + num);
}