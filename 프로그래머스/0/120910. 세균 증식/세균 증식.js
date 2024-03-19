function solution(n, t) {
    let a = 0;
    for (let i= 0; i<t; i++) {
        a = Math.pow(2, t);
    }
    return n * a;
}