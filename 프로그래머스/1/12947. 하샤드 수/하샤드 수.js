function solution(x) {
    let sum = 0;
    x.toString().split('').map(Number).forEach(e => {sum += e;});
    let answer = x % sum == 0 ? true : false;
    return answer;
}