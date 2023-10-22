function solution(num_list) {
    let odd = 0;
    let even = 0;
    for (let i = 0; i < num_list.length; i++) {
        if (num_list[i] % 2 === 0) {
            even += 1;
        } else if (num_list[i] % 2 === 1) { 
            odd += 1;
        }
    }
    return [even, odd];
}
