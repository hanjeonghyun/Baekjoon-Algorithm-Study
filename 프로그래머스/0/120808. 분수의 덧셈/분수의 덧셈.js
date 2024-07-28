function solution(numer1, denom1, numer2, denom2) {
    let numer = denom1 === denom2 ? numer1 + numer2 : numer1 * denom2 + numer2 * denom1;
    let denom = denom1 === denom2 ? denom1 : denom1 * denom2;
    let max = 1;
    for (let i = 0; i <= numer; i++) {
        if (numer % i === 0 && denom % i === 0) {
            max = i;
        }
    }
    return [numer / max, denom / max]
}