function solution(rank, attendance) {
    var answer = [];
    let result = 0;
    for (let i = 0; i < rank.length + 1; i++) {
        if (attendance[i] == true) {
        answer.push(rank[i])
        }
        answer.sort((a, b) => a - b);
    }
    result = 10000 * rank.indexOf(answer[0]) + 100 * rank.indexOf(answer[1]) + rank.indexOf(answer[2])
    return result;
}