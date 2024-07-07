const fibonacci = function(number) {
    let fibonacci = [1, 1];
 
    if (number < 0) {
        return "OOPS";
    }

    else if (number == 0) {
        return 0;
    }


    while (number > fibonacci.length) {
        let lastFibonacci = fibonacci[fibonacci.length - 1];
        let preLastFibonacci = fibonacci[fibonacci.length - 2];
        fibonacci.push(lastFibonacci + preLastFibonacci);
    }

    return fibonacci[number - 1];
};

// Do not edit below this line
module.exports = fibonacci;
