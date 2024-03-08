function solution(arr, intervals) {
    var answer = [];
    let a = intervals[0][0];
    let b = intervals[0][1];
    let c = intervals[1][0];
    let d = intervals[1][1];
    answer.push(...arr.slice(a, b + 1)); 
    answer.push(...arr.slice(c, d + 1)); 
    return answer;
}
