function solution(myString) {
    let answer = myString.split("x").filter(str => str !== "").sort();
    return answer;
}