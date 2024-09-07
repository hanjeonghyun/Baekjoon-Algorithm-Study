// 둘 중 하나라도 벽이면 벽 : or
// 둘 다 공백이면 공백 : and
 
function solution(n, arr1, arr2) {
    let first = arr1.map((e) => e.toString(2).padStart(n, '0'));
    let second = arr2.map((e) => e.toString(2).padStart(n, '0'));

    let map = first.map((line, lidx) => {
        return line.split("").map((num, nidx) => {
            return (num === "1" || second[lidx][nidx] === "1") ? "#" : " ";
        }).join("");  
    });

    
    return map;
}