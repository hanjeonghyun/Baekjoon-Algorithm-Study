function solution(bridge_length, weight, trucks) {
    let time = 0;
    let bridge = Array(bridge_length).fill(0);

    while (trucks.length > 0 || bridge.some(v => v != 0)) {
        time++;
        bridge.shift();

        const currentWeight = bridge.reduce((a, b) => a + b, 0);
        const nextTruck = trucks[0];

        if (nextTruck !== undefined && currentWeight + nextTruck <= weight) {
            bridge.push(trucks.shift());
        } else {
            bridge.push(0);
        }
    }

    return time;
}
