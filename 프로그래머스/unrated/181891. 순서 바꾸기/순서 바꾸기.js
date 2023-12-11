function solution(num_list, n) {
    var answer = [];
    let arr1 = num_list.slice(0, n).map(Number);
    let arr2 = num_list.slice(n).map(Number);
    return [...arr2, ...arr1];
}