function solution(rsp) {
    var answer = '';
    answer = rsp.split('').map(Number);

    for (let i = 0; i < answer.length; i++) {
        if (answer[i] === 2) {
            answer[i] = 0;
        } else if (answer[i] === 0) {
            answer[i] = 5;
        } else {
            answer[i] = 2;
        }
    }
    return answer.join('');
}