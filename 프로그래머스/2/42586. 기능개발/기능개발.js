function solution(progresses, speeds) {
    const answer = [];
    let days = progresses.map((progress, i) => Math.ceil((100 - progress) / speeds[i]));
    
    let maxDay = days[0];
    let count = 1;
    
    for (let i = 1; i < days.length; i++) {
        if (days[i] > maxDay) {
            answer.push(count);
            maxDay = days[i];
            count = 1;
        } else {
            count++;
        }
    }
    
    answer.push(count);
    return answer;
}
