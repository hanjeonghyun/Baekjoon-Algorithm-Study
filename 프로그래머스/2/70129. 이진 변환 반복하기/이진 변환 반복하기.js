function solution(s) {
    var count = 0;
    var zero = 0;

    while (s !== "1") {
        let onesCount = s.split("").filter((e) => e === "1").length;
        zero += s.length - onesCount;
        s = onesCount.toString(2);  
        count++; 
    }

    return [count, zero];
}
