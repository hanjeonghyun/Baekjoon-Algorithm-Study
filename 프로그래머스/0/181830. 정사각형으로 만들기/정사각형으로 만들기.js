function solution(arr) {
    const Rows = arr.length;
    const Cols = arr[0].length;
    if (Rows > Cols) {
        arr.forEach(row => {
            while (row.length < Rows) {
                row.push(0);
            }
        });
    } else if (Rows < Cols) {
        while (arr.length < Cols) {
            arr.push(new Array(Cols).fill(0));
        }
    }

    return arr;
}