function solution(n) {
    let a = Math.sqrt(n);
    return Number.isInteger(a) ? Math.pow(a + 1, 2) : -1;
}