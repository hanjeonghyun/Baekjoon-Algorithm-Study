function solution(food) {
    var answer = [];
    for (let i = 1; i < food.length; i++) {
        if (food[i] > 1 && food[i] % 2 == 1) {
            food[i]--;
        } 
        for (let j = 1; j <= food[i] / 2; j++) {
            answer.push(i);
        }
    }
    
    let table = [...answer, 0, ...answer.reverse()]
    
    return table.join("");
}