function solution(k, m, score) {
    let profit = 0;
    let boxes = [];
    score = score.sort((a, b) => b - a);
    
    for (let i = 0; i < score.length; i += m) {
        let box = score.slice(i, i + m);
        

        if (box.length == m) {
            boxes.push(box);
        } 
        
    }
    
    let result = boxes.map((e) => Math.min(...e) * m);
    result.map((e) => profit += e);
    
    return profit;
}