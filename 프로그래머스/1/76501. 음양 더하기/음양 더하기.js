function solution(absolutes, signs) {
    let expr = absolutes.map((e, idx) => signs[idx] ? absolutes[idx] : -absolutes[idx]);
    return expr.reduce((sum, num) => sum + num, 0);
}