function solution(k, tangerine) {
    var answer = 0;
    let hash = {};
    for (let i = 0; i < tangerine.length; i++) {
        if (hash[tangerine[i]]) {
            hash[tangerine[i]]++;
        } else {
            hash[tangerine[i]] = 1;
        }
    
    }
    
    let sorted = Object.entries(hash).sort((a, b) => b[1] - a[1]);
    
    for (let i = 0; i < sorted.length; i++) {
        if (k <= 0) {
            break;
        }
        k = k - sorted[i][1];
        answer++;
    }
    
    return answer;
}