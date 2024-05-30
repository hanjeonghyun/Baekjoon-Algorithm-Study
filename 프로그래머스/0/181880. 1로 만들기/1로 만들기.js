function solution(num_list) {
    var answer = 0;
    num_list.forEach((el) => {
        while (el != 1) {
            if (el % 2 == 0) {
                el = el / 2;
            } else {
                el = (el - 1) / 2;
            }
            answer++;
        }
    });
    
    return answer;
}
