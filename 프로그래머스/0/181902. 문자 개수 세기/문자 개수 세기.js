function solution(my_string) {
    var answer = new Array(52).fill(0);
    for (let i = 0; i < my_string.length; i++) {
        let alpha = my_string.charCodeAt(i);
        if (alpha >= 65 && alpha <= 90) {
            answer[alpha - 65]++;
        } else if (alpha >= 97 && alpha <= 122) {
            answer[alpha - 97 + 26]++;
        }
    }
    return answer;
}
