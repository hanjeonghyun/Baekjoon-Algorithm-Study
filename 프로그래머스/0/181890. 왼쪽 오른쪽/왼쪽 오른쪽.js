function solution(str_list) {
    var answer = [];
    for (let i = 0; i < str_list.length; i++) {
        if (str_list[i] == "l") {
            return answer = str_list.slice(0, i);
        } else if (str_list[i] == "r") {
            return answer = str_list.slice(i + 1);
        } else if (!str_list.includes("l" || "r")) {
            return [];
        }
    }
    return answer;
}