function solution(arr, delete_list) {
    for (let i = arr.length - 1; i >= 0; i--) {
        for (let j = 0; j < delete_list.length; j++) {
            if (arr[i] === delete_list[j]) {
                arr.splice(i, 1);
                break;
            }
        }
    }
    return arr;
}