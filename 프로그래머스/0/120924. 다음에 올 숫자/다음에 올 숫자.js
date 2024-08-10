function solution(common) {
    let diff = common[1] - common[0] === common[2] - common[1] ? common[1] - common[0] : 0;
    let ratio = common[1] / common[0] === common[2] / common[1] ? common[1] / common[0] : 0;
    return diff ? common.at(-1) + diff : common.at(-1) * ratio;
}