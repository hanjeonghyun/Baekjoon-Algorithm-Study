function solution(n, words) {
    var answer = [];
    let temp = [];
    
    for (let i = 0; i < words.length; i++) {
        if (i > 0 && words[i][0] !== words[i -1][words[i - 1].length - 1] || temp.includes(words[i])) {
            answer.push(i % n + 1);
            answer.push(Math.floor(i / n) + 1);
            return answer;
        }
        temp.push(words[i]);
    }

    return [0, 0];
}
