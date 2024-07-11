function solution(arr, query) {
    var answer = [];
    for (let i = 0; i < query.length; i++) {
        const current = query[i];
        if (i % 2 === 0) {
            arr.splice(current + 1, arr.length - (current + 1));
        } else if (i % 2 === 1) {
            arr.splice(0, current);
        }
    }
    return arr;
}