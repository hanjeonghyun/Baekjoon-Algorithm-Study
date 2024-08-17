function solution(num, total) {
    let start = (total * 2 / num + 1 - num) / 2;
    
    let arr = [];
    for (let i = 0; i < num; i++) {
        arr.push(start + i);
    }
    return arr;
}