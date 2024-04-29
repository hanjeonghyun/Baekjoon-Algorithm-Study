function solution(myString, pat) {
    var answer = 0;
    let Str = '';
    for (let i=0; i<myString.length;i++) {
        if (myString[i] == "A") {
            Str += "B";
        } else {
            Str += "A";
        }
        answer = Str.includes(pat) ? 1 : 0;
    }
    return answer;
}