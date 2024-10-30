function solution(elements) {
    const answer = new Set();
    const n = elements.length;
    
    for (let i = 0; i < n; i++) {
        let sum = 0;
        for (let j = 0; j < n; j++) {
            sum += elements[(i + j) % n];
            answer.add(sum);
        }
    }

    return answer.size; 
}
