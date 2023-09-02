
let minNum = 0, maxNum = 0, g = 0;
class GuessingGame {
    constructor() {}
    setRange(min, max) {
        minNum = min;
        maxNum = max;
    }

    guess() {
        g = Math.round(minNum + (maxNum - minNum) / 2);
        return g;
    }

    lower() {
        maxNum = g;
    }

    greater() {
        minNum = g;
    }
}

module.exports = GuessingGame;
