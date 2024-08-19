function solution(arr) {
    let answer = arr.reduce((sum, num) => (sum + num), 0)
    return answer / arr.length;
}