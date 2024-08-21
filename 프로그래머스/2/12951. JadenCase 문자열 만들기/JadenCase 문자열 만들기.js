function solution(s) {
    var words = s.toLowerCase();
    let upper = words.split(" ").map((e) => e.charAt(0).toUpperCase() + e.slice(1));
    return upper.join(" ");
}
