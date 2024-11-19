// 칠해져 있는 벽은 1, 비어있는 벽은 0. 모든 원소가 1이 되어야 색칠되는 것

function solution(n, m, section) {
    var count = 0;
    let wall = Array(n).fill(1);
    
    section.forEach(idx => wall[idx - 1] = 0);
    
    for (let i = 0; i < n; i++) {
         if (wall[i] == 0) {
            wall.fill(1, i, i + m);
            count++;
        }
    }
    return count;
}