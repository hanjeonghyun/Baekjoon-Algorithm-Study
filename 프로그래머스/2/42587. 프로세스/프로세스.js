function solution(priorities, location) {
    let answer = 0;
    let queue = priorities.map((p, i) => ({p, i}));
    
    while (queue.length > 0) {
        let current = queue.shift();
        
        if (queue.some(item => item.p > current.p)) {
            queue.push(current);
        } else {
            answer++;
            if (current.i === location) {
                return answer;
            }
        }
    }
    return answer;
}
