function solution(s) {
    var answer = s.split(" ").map(Number);
    let max = Math.max(...answer);
    let min = Math.min(...answer);
    return min + " " + max
}