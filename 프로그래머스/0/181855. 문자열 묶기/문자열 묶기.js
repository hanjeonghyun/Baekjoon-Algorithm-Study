function solution(strArr) {
    var lengths = strArr.map((n) => n.length);

    var frequency = {};

    lengths.forEach(length => {
        if (frequency[length]) {
            frequency[length]++;
        } else {
            frequency[length] = 1;
        }
    });

    var maxFrequency = 0;
    for (var length in frequency) {
        if (frequency[length] > maxFrequency) {
            maxFrequency = frequency[length];
        }
    }

    return maxFrequency;
}
