function solution(want, number, discount) {
    var answer = 0;
    let wanted = want.flatMap((item, index) => Array(number[index]).fill(item)).sort();
    
    for (let i = 0; i <= discount.length - 10; i++) {
        let member = discount.slice(i, i + 10).sort();
        if (member.join('') === wanted.join('')) answer++;
    }
    return answer;
}