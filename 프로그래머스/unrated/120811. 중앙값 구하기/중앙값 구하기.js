function solution(array) {
    array.sort(function(a, b) {
        return a - b;
    });
    var answer = Math.floor(array.length/2);
    
    return array[answer];
}