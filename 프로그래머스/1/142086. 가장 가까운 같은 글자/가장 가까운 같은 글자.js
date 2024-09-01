function solution(s) {
    var answer = [];
    let stack = [];
    for (let i = 0; i < s.length; i++) {
        if (!stack.includes(s[i])) {
            stack.push(s[i]);
            answer.push(-1);
        } else if (stack.includes(s[i])) {
            let lastIndex = stack.lastIndexOf(s[i]);
            stack.push(s[i]);
            answer.push(i - lastIndex);
        }
    }
    return answer;
}