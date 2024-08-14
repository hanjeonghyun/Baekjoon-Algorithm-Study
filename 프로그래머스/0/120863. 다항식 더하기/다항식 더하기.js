function solution(polynomial) {
    var answer = polynomial.split(" ").filter((e) => e !== "+");

    let xs = answer.filter((e) => e.includes("x"));
    let numbers = answer.filter((e) => !e.includes("x")).map(Number);

    let xvalues = xs.map(e => {
        return parseInt(e.replace("x", "") || "1", 10);
    }).reduce((sum, num) => sum + num, 0);

    let totalNumbers = numbers.reduce((sum, num) => sum + num, 0);

    let result = "";
    if (xvalues !== 0) {
        result += xvalues === 1 ? "x" : `${xvalues}x`;
    }
    if (totalNumbers !== 0) {
        if (result) result += " + ";
        result += totalNumbers;
    }
    return result || "0";
}

