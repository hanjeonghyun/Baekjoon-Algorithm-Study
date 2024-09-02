function solution(nums) {
    var answer = [...new Set(nums)];
    let num = nums.length / 2;
    if (num > answer.length) {
        return answer.length;
    } else {
        return num;
    }
    return answer;
}