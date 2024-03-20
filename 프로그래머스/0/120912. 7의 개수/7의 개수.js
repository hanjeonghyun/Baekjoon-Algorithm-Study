function solution(array) {
    let answer = array.join("").split("").filter(function(num) {
        return num == "7";
    });
    return answer.length;
}