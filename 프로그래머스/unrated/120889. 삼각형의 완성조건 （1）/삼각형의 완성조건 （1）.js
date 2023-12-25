function solution(sides) {
    sides = sides.sort(function(a, b) {
        return a - b;
    });
    var answer = sides[2] < sides[0] + sides[1] ? 1 : 2;
    return answer;
}