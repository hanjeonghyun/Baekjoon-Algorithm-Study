function solution(array, commands) {
    var answer = [];
    for (let i = 0; i < commands.length; i++) {
        let [start, end, idx] = commands[i];
        let sorted =  array.slice(start - 1, end).sort((a, b) => a - b);
        answer.push(sorted[idx - 1]);
    }
    return answer;
}