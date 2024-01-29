function solution(my_string) {
    var answer = [];
    for (let i = 0; i < my_string.length; i++) {
        let num = Number(my_string[i]);
        if (!isNaN(num)) { 
            answer.push(num);
        }
        answer.sort(function(a, b)  {
          return a - b;
        });
    }
    return answer;
}
