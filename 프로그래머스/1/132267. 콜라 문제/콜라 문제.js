function solution(a, b, n) {
    var answer = 0;
    while (n >= a) {
        var newBottles = Math.floor(n / a) * b; 
        answer += newBottles;  
        n = newBottles + (n % a);  
    }
    return answer;
}