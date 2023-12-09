function solution(arr, k) {
    var answer = [];
    if (k % 2 == 1) {
        return arr.map((el) => el * k)
    } else {
        return arr.map((el) => el + k)
    }
    return arr;
}