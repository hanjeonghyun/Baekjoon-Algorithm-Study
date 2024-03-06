function solution(box, n) {
    let newBox = box.map((e) => Math.floor(e / n));
    let answer = newBox[0] * newBox[1] * newBox[2];
    return answer;
}