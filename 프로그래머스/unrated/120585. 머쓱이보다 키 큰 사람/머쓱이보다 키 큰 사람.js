function solution(array, height) {
    var answer = 0;
    answer = array.filter((array) => array > height).length;
    return answer;
}