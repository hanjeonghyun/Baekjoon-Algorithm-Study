function solution(arr) {
    let min = Math.min(...arr)
    return arr.length > 1 ? arr.filter((e) => e !== min) : [-1];
}