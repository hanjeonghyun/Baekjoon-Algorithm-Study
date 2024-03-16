function solution(s){
    var answer = true;
    let p = 0;
    let y = 0;
    let string = s.toLowerCase();
    for (let i=0;i<string.length;i++) {
        if (string[i] == 'p') {
            p++;
        } else if (string[i] == 'y') {
            y++;
        }
        answer = p === y ? true : false;
    }
    return answer;
}