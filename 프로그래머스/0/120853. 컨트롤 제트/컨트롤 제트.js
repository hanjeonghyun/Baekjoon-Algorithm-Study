function solution(s) {
    var answer = 0;
    let numbers = s.split(" ");
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] == "Z") {
            answer -= Number(numbers[i - 1]);
        } else {
            answer += Number(numbers[i]);
        }
    }
    return answer;
}