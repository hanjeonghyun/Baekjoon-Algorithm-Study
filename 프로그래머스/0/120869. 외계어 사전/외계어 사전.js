function solution(spell, dic) {
    let answer = 2;
     dic.forEach((e) => {
        if (e.length === spell.length && spell.every(char => e.includes(char))) {
            answer = 1; 
        }
    });  
    return answer;
}