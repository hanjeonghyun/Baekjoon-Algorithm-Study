function solution(arr1, arr2) {
    return arr1.map((e, idx) => 
        e.map((i, idx2) => i + arr2[idx][idx2]));
}