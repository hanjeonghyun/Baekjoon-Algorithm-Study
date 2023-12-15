function solution(order) {
    var answer = 0;
    let a = order + "";
    let b = a.split("").map(Number);
    for (let i=0;i<b.length;i++){
        if (b[i] == 3 || b[i] == 6 || b[i] == 9) {
            answer += 1;
        }
    }
    return answer;
}