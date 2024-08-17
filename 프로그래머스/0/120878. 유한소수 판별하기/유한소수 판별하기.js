function solution(a, b) {
    let gcd = 0;
    for (let i = Math.max(a, b); i > 0; i--) {
        if (a % i === 0 && b % i == 0) {
            gcd = i;
            break;
        }
    }
    let mom = b / gcd;
    while (mom % 2 === 0) mom /= 2;
    while (mom % 5 === 0) mom /= 5;

    return mom === 1 ? 1 : 2;
}