function solution(s) {
    var answer = s.split(" ");
    let max = Math.max(...answer);
    let min = Math.min(...answer);
    return min + " " + max
}