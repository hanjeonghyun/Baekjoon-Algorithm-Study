function solution(n) {
    let answer = '';
    for (let i = 0; i < n; i++) {
        let word = answer[i - 1] == "수" ? "박" : "수";
        answer += word;
    }
    return answer;
}