function solution(keyinput, board) {
    let x = 0, y = 0;
    
    let space = [
        Math.floor((board[0] - 1) / 2), 
        Math.floor((board[1] - 1) / 2) 
    ];

    for (let key of keyinput) {
        if (key === "left") {
            x = Math.max(x - 1, -space[0]);
        } else if (key === "right") {
            x = Math.min(x + 1, space[0]);
        } else if (key === "up") {
            y = Math.min(y + 1, space[1]);
        } else if (key === "down") {
            y = Math.max(y - 1, -space[1]);
        }
    }
    
    return [x, y];
}
