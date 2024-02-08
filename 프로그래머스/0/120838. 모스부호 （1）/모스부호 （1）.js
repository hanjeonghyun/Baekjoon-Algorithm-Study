function solution(letter) {
    const morse = { 
        '.-':'a','-...':'b','-.-.':'c','-..':'d','.':'e','..-.':'f',
        '--.':'g','....':'h','..':'i','.---':'j','-.-':'k','.-..':'l',
        '--':'m','-.':'n','---':'o','.--.':'p','--.-':'q','.-.':'r',
        '...':'s','-':'t','..-':'u','...-':'v','.--':'w','-..-':'x',
        '-.--':'y','--..':'z'
    };
    var words = letter.split(" ");
    let decoded = '';
    for (let i = 0; i < words.length; i++) {
        if (morse[words[i]]) { 
            decoded += morse[words[i]]; 
        } 
    }
    return decoded.trim(); 
}

