function solution(s){
    let paren = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] == "(") {
            paren++;
        } else if (s[i] == ")") {
            paren--;
        }
        if (paren < 0) {
            return false;
        }
    }
    return s.at(-1) == ")" && paren == 0;
}