function solution(order) {
    var answer = 0;
    order.forEach(function(e) {
        if (e.includes('americano')) {
            answer += 4500;
        } else if (e.includes('latte')) {
            answer += 5000;
        } else if (e == "anything") {
            answer += 4500
        }
    })
    return answer;
}