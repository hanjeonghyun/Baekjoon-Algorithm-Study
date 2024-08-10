function solution(quiz) {
    var answer = quiz.map((e) => {
        let [first, expr, second, equal, result] = e.split(" ");
        
        return expr == "+" ? +first + +second === +result ? "O" : "X" : +first - +second === +result ? "O" : "X";
    });
    return answer;
}
