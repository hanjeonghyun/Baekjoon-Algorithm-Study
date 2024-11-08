function solution(citations) {
    var answer = 0;
    let arr = citations.sort((a, b) => b - a);
    
    for (let i = 0; i < citations.length; i++) {
        if (citations[i] >= i + 1)
            answer++;
        else 
            break;
    }
    return answer;
}