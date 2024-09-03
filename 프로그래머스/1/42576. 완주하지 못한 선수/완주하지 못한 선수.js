function solution(participant, completion) {
    var answer = new Map();

    for (let i = 0; i < participant.length; i++) {
        if (answer.get(participant[i])) {
            answer.set(participant[i], answer.get(participant[i]) + 1);
        } else {
            answer.set(participant[i], 1);
        }
    }

    for (let i = 0; i < completion.length; i++) {
        if (answer.get(completion[i])) {
            answer.set(completion[i], answer.get(completion[i]) - 1);
        }
    }

    for (let [key, value] of answer) {
        if (value > 0) {
            return key;
        }
    }
}