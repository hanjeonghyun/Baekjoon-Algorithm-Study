function solution(arr) {
    var answer = 0;
    let previous = arr;
    while (true) {
        const current = previous.map((e) => 
            e >= 50 && e % 2 === 0 ? e / 2 :
            e < 50 && e % 2 === 1 ? e * 2 + 1 : e
        );
        if (previous.every((e, i) => e === current[i])) {
            break;
        }
        answer++;
        previous = current;
    }
    return answer;
}