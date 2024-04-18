function solution(my_string) {
    var answer = [];
    let result = my_string.split(' ');
    for (let i=0;i<result.length;i++) {
        if (result[i].length != 0) {
            answer.push(result[i]);
        }
    }    
    return answer;
}