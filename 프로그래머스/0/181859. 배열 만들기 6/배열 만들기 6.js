function solution(arr) {
    var answer = [];
    arr.forEach((x, i) => {
        if (x !== answer[answer.length - 1]) {
            answer.push(x);
        } else {
            answer.splice(-1);
        }
    })
    
    if (answer.length == 0) {
        answer = [-1]
    }
    return answer;
}