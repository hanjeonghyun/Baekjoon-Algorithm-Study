function solution(score) {
    var average = score.map(e => (e[0] + e[1]) / 2);
    let sorted = average.slice().sort((a, b) => (b - a))
    return average.map(e => sorted.indexOf(e) + 1);
}