function solution(arr1, arr2) {
    let result1 = 0;
    let result2 = 0;
    let answer = 0;
    if (arr1.length === arr2.length) {
        arr1.forEach(function(item){
            result1 += item;
        })
        arr2.forEach(function(item){
            result2 += item;
        })
        answer = result1 > result2 ? 1 : result1 === result2 ? 0 : -1;
        } else if (arr1.length != arr2.length) {
            answer = arr1.length > arr2.length ? 1 : -1;
        }
    return answer;
}