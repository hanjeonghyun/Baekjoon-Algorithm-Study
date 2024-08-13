function solution(dots) {
    let x = dots.map(dot => dot[0]);
    let y = dots.map(dot => dot[1]);
    
    let horizontal = Math.max(...x) - Math.min(...x);
    let vertical = Math.max(...y) - Math.min(...y);
    
    return horizontal * vertical;
}