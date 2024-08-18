function solution(price, money, count) {
    var answer = 0;
    let fee = 0;
    for (let i = 1; i <= count; i++) {
        fee += (price * i);
    }
    return (money - fee) < 0 ? Math.abs(money - fee) : 0;
}