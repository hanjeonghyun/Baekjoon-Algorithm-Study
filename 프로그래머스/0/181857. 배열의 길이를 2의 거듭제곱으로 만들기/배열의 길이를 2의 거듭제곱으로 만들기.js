function solution(arr) {
    const length = arr.length;
    while ((arr.length & (arr.length - 1)) !== 0) {
        arr.push(0);
    }
    return arr;
}