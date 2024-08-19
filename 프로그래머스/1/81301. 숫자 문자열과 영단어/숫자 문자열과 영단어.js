function solution(s) {
    const words = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine"
    ];

    let answer = s;
    words.forEach((word, idx) => {
        const regex = new RegExp(word, 'g'); 
        answer = answer.replace(regex, idx); 
    });

    return Number(answer); 
}
