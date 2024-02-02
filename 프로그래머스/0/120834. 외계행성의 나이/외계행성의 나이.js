function solution(age) {
    var answer = '';
    let result = age.toString().split("");
    for (let i=0;i<result.length;i++) {
        if (result[i] === "0") {
            answer += "a";
        } else if (result[i] === "1") {
            answer += "b";
        } else if (result[i] === "2") {
            answer += "c";
        } else if (result[i] === "3") {
            answer += "d";
        } else if (result[i] === "4") {
            answer += "e";
        } else if (result[i] === "5") {
            answer += "f";
        } else if (result[i] === "6") {
            answer += "g";
        } else if (result[i] === "7") {
            answer += "h";
        } else if (result[i] === "8") {
            answer += "i";
        } else if (result[i] === "9") {
            answer += "j";
        }
    }
    return answer;
}