function solution(n) {
    var num = n + 1;
    var targetCount = n.toString(2).split(1).length - 1;
    while (true) {
        let numCount = num.toString(2).split(1).length - 1;
        if (targetCount == numCount) {
            break;
        }
        num++;
    }
    return num;
}