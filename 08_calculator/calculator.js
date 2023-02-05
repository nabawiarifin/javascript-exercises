const add = function(x,y) {
	return x + y
};

const subtract = function(x, y) {
	return x-y
};

const sum = function(arr) {
	return arr.reduce((total, item) => total + item, 0)
};

const multiply = function(arr) {
  return arr.reduce((total, item) => total * item, 1)
};

const power = function(x, y) {
	return x ** y
};

const factorial = function(n) {
	if (n === 0){
    return 1;
  } else {
    for (var i = n - 1; i >= 1; i--){
      n = n * i
    }
    return n
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
