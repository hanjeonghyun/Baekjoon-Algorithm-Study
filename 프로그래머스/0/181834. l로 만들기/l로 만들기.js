function solution(myString) {
    var answer = '';
    for (let i = 0; i < myString.length; i++) {
        if (
            myString[i] === "a" ||
            myString[i] === "b" ||
            myString[i] === "c" ||
            myString[i] === "d" ||
            myString[i] === "e" ||
            myString[i] === "f" ||
            myString[i] === "g" ||
            myString[i] === "h" ||
            myString[i] === "i" ||
            myString[i] === "j" ||
            myString[i] === "k" 
        ) {
            answer += "l";
        } else {
            answer += myString[i];
        }
    }
    return answer;
}