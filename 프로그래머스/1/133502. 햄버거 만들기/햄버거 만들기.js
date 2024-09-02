function solution(ingredient) {
    var answer = 0;
    var stack = [];
    let burger = "1231";
    
    for (let i = 0; i < ingredient.length; i++) {
        stack.push(ingredient[i]);
        if (stack.length >= 4 && stack.slice(-4).join('') === burger) {
            stack.splice(-4, 4);
            answer++;
        }
    }
    
    return answer;
}
