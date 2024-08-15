function solution(d, budget) {
    let answer = 0;
    let asked = d.sort((a, b) => (a - b));
    for (let i = 0; i <= d.length; i++) {
        if (budget - d[i] >= 0) {
            budget = budget - d[i];
            answer++;
        } 
    }
    return answer;
}