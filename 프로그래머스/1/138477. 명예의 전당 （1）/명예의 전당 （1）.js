function solution(k, score) {
    var answer = [];
    let minScore = [];

    for (let i = 0; i < score.length; i++) {
        answer.push(score[i]);
        if (answer.length > k) {
            const minValue = Math.min(...answer);
            const minIndex = answer.indexOf(minValue);
            answer.splice(minIndex, 1); 
        }

        minScore.push(Math.min(...answer));
    }

    return minScore;
}

