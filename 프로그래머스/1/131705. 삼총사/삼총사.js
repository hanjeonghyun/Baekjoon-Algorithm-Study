function solution(number) {
    var answer = 0;
    var count = 0;
    for (let i = 0; i < number.length; i++) {
        for (let j = i + 1; j < number.length; j++) {
            for (let t = j + 1; t < number.length; t++) {
                let answer = number[i] + number[j] + number[t]; 
                if (answer === 0) count++; 
            }
        }
    }
    return count;
}