function solution(num_str) {
    let answer = num_str.split('').map(Number);
    let sum = 0;
    
    answer.forEach((el) => {
        sum += el;
    });
    return sum;
}