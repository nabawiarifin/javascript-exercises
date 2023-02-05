const sumAll = function(x, y) {
    let total = 0

    if (isNaN(x) || isNaN(y)){
        return "ERROR"
    } else if (x < y) {
        for (i = x; x < y; i++) {
            total += i
        }
        return total
    }
};

// Do not edit below this line
module.exports = sumAll;
