function solution(arr) {
    var max = Math.max(...arr);
    while (true) {
        var remainders = arr.map((e) => max % e);
        if (remainders.reduce((acc, cur) => acc + cur, 0) === 0) {
            return max;
        }
        max++;
    }
}
