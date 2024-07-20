function solution(array) {
    let maxNumber = Math.max(...array);
    return [Math.max(...array), array.indexOf(maxNumber)]
}