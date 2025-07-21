function solution(arr, divisor) {
    const filtered = arr.filter((e) => e % divisor == 0);
    filtered.sort((a, b) => a - b);
    if (filtered.length < 1) return [-1]
    else return filtered
}