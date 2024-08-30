function solution(A, B) {
    var answer = 0;
    let lst = A.split("")
    let blst = B.split("")
    while (true) {
        if (lst.join('') === blst.join('')) {
            return answer;
        }
        else if (answer >= lst.length) {
            return -1;
        }
        let a = lst.pop();
        lst.unshift(a);
        answer++;
    }
    return answer;
}