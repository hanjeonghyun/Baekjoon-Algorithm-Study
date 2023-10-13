function solution(numbers) {
    numbers.sort((a,b) => b - a);
    var answer = parseInt(numbers[0]) * parseInt(numbers[1]);
    return answer;
}