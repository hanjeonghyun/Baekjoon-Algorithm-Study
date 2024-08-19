function solution(sizes) {
    var x = 0, y = 0;
    sizes.forEach((card) => {
        x = Math.max(x, Math.max(card[0], card[1]));
        y = Math.max(y, Math.min(card[0], card[1]));
    })
    return x * y;
}