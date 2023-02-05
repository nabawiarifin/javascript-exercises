const repeatString = function(text, repeat) {
    let completeString = "";

    if (repeat < 0) {
        return "ERROR";
    } else {
        for (let i = 0; i < repeat; i++) {
            completeString += text;
        }
        return completeString;
    };
};

// Do not edit below this line
module.exports = repeatString;
