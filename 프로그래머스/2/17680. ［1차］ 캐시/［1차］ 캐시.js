function solution(cacheSize, cities) {
    var answer = 0;
    let cache = [];
    
    if (cacheSize == 0) {
        return cities.length * 5;
    }
    
    for (let i = 0; i < cities.length; i++) {
        cities[i] = cities[i].toLowerCase();
        
        if (cache.includes(cities[i])) {
            answer++;
            let idx = cache.indexOf(cities[i]);
            cache.splice(idx, 1);
            cache.push(cities[i]);
        } else {
            answer += 5;
            
            if (cache.length === cacheSize) {
                cache.shift();
            }
            
            cache.push(cities[i]);
            
        }
        
    }
    return answer;
}