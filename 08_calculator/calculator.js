const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	let result = 0;
  arr.forEach(element => {
    result += element;
  });

  return result;
};

const multiply = function(arr) {
  return arr.reduce((result, number) => result * number, 1);
};

const power = function(a, b) {
  let result = 1;

	for (let index = 0; index < b; index++) {
    result *= a;
  }

  return result;
};``

const factorial = function(number) {
  let result = 1;

	if(number === 0) {
    result = 1;
  }

  else {
    for (let index = 1; index <= number; index++) {
      result *= index;
    }
  }

  return result;
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
