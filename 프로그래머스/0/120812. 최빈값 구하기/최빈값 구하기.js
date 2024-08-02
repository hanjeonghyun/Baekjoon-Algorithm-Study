function solution(array) {
    const frequencyMap = new Map();
    
    // 각 숫자의 빈도를 계산
    for (const num of array) {
        frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
    }
    
    let maxFrequency = 0;
    let mode = 0;
    
    // 가장 높은 빈도의 숫자 찾기
    for (const [num, count] of frequencyMap) {
        if (count > maxFrequency) {
            maxFrequency = count;
            mode = num;
        } else if (count == maxFrequency) {
            mode = -1;
        }
    }
    
    return mode;
}
