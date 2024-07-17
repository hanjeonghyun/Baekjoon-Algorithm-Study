function solution(picture, k) {
    var answer = [];
    picture.forEach(e => {
        const repeat = [...e].map(e => e.repeat(k)).join('');
            for (let i = 0; i < k; i++) {
                answer.push(repeat);
        }
    })
    return answer;
}