function solution(myString, pat) {
    var answer = [];
    let j = pat.length;
    for (let i = 0; i < myString.length; i++) {
        answer.push(myString.substr(i, j));
    }
    return answer.filter((e) => e == pat).length;
}