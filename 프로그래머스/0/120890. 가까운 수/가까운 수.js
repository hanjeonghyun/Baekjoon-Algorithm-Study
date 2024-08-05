function solution(array, n) {
    var changed = array.map((e) => Math.abs(e - n));

    var minDifference = Math.min(...changed);

    var closestNumbers = array.filter((e, i) => changed[i] === minDifference);

    return Math.min(...closestNumbers);
}