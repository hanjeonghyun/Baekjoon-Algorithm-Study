function solution(my_string, n) {
    let i = my_string.length;
    var answer = my_string.slice(i - n);
    return answer;
}