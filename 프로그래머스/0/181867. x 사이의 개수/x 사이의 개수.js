function solution(myString) {
    var result = [];
    var parts = myString.split("x");
    for (let i = 0; i < parts.length; i++) {
        result.push(parts[i].length);
    }
    return result;
}