const reverseString = function(text) {
    let newString = "";
    let lengthOfString = text.length;

    for (i = lengthOfString-1; i >= 0; i--) {
        newString += text.charAt(i)
    }

    return newString
};

// Do not edit below this line
module.exports = reverseString;
