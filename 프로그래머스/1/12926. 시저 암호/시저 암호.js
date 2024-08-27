function solution(s, n) {
    let result = [];
    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        if (char >= 'A' && char <= 'Z') {
            let newChar = String.fromCharCode((char.charCodeAt(0) - 65 + n) % 26 + 65);
            result.push(newChar);
        } else if (char >= 'a' && char <= 'z') {
            let newChar = String.fromCharCode((char.charCodeAt(0) - 97 + n) % 26 + 97);
            result.push(newChar);
        } else {
            result.push(char);
        }
    }
    return result.join('');
}
