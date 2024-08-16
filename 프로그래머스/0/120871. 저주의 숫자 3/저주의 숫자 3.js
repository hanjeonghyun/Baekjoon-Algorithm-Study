function solution(n) {
    let x = 0;
    let answer = 0;
    for (let i = 1; i <= n + x; i++) {
        if (i % 3 === 0 || String(i).includes('3')) {
            x++;
        } else {
            answer = i;
        }
    }
    return answer;
}