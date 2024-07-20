function solution(my_string) {
    return my_string
        .split('')
        .map(Number)
        .reduce((acc, el) => {
            if (!isNaN(el)) {
                acc += el;
            }
            return acc;
        }, 0); 
}