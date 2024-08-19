function solution(t, p) {
    var answer = [];
    let leng = p.length;
    for (let i = 0; i <= t.length - leng; i++) {
        answer.push(parseInt(t.substr(i, leng)));
    }
    return answer.filter((e) => e <= Number(p)).length;
}