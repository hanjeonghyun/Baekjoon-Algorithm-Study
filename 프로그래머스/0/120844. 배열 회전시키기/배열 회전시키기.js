function solution(numbers, direction) {
    var answer = [...numbers];
    if (direction == 'right') {
        let a = numbers.at(-1);
        answer.pop();
        answer.unshift(a);
    } else {
        let b = numbers[0];
        answer.push(b);
        answer.shift(b);
    }
    return answer;
}