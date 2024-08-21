function solution(A,B){
    let sortedA = A.sort((a, b) => a - b);
    let sortedB = B.sort((a, b) => b - a);
    let mul = A.map((e, idx) => e * B[idx]);
    return mul.reduce((sum, num) => sum + num);
}