function solution(binomial) {
    var answer = 0;
    let arr = binomial.split(" ");

    answer = arr[1] == '+' ? 
        parseInt(arr[0]) + parseInt(arr[2]) :
        arr[1] == '-' ?
        parseInt(arr[0]) - parseInt(arr[2]) :
        parseInt(arr[0]) * parseInt(arr[2]);
    return answer;
}