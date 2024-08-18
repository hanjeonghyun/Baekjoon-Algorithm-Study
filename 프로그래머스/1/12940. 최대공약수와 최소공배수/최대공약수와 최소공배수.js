function solution(n, m) {
    let gcd = 0, lcm = 0; 
    for (let i = 1; i <= (n * m); i++) {
        if (n % i == 0 && m % i == 0) {
            gcd = i;
        }
        if (i % n == 0 && i % m == 0) {
            lcm = i;
            break;
        }
    }
    return [gcd, lcm];
}