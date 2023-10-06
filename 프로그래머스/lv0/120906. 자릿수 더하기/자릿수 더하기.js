function solution(n) {
    var answer = 0;
    var a = n.toString();
    for (let i=0;i<a.length;i++) {
        answer += parseInt(a[i]);
    }
    return answer;
}