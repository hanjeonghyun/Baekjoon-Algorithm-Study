function solution(a, b) {
    var answer = (BigInt(a) + BigInt(b)).toString();
    return answer;
}

//BigInt는 Number가 나타낼 수 있는 최댓값인 2^53 - 1보다 큰 정수를 표현할 수 있는 내장 객체이다.