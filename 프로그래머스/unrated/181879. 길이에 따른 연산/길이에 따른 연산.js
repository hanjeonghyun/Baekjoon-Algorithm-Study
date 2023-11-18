function solution(num_list) {
    var answer = 1;

    if (num_list.length >= 11) {
        num_list.forEach(num => {
            answer += num;
        });
        answer -= 1;
    } else {
        num_list.forEach(num => {
            answer *= num;
        });
    }

    return answer;
}
