function solution(nums) {
    let answer = 0;
    let myBag = new Map();
    nums.forEach((monster) => {
        if (myBag.get(monster)) myBag.set(monster, myBag.get(monster) + 1);
        else myBag.set(monster, 1);
    });
    
    if (myBag.size < nums.length / 2) answer = myBag.size;
    else answer = nums.length / 2;
    
    return answer;
}