function solution(s){
    let paren = 0;
    for (let i = 0; i < s.length; i++) {
        s[i] === "(" ? paren++ : paren--;
        if (paren < 0) {
            return false;
        }
    }
    return s.at(-1) == ")" && paren == 0;
}