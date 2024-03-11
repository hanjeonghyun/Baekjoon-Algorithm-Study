function solution(i, j, k) {
    var answer = 0;
    let sentence = '';
    for (let a=i;a<=j;a++) {
        sentence += a;
    }
    for (let b=0;b<=sentence.length;b++) {
        if (sentence[b] == k) {
            answer++;
        }
    }
    return answer;
}