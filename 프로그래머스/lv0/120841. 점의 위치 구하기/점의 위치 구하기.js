function solution(dot) {
    var answer = 0;
    let [a,b] = dot;
    if (a > 0 && b > 0){
        answer = 1;
    } else if (a < 0 && b > 0){
        answer = 2;
    } else if (a < 0 && b < 0){
        answer = 3;
    } else if (a > 0 && b < 0){
        answer = 4;
    }
    return answer;
}