const repeatString = function(string, number) {
    let result = "";
    
    if (number < 0) {
        return "ERROR";
    }

    for (let index = 1; index <= number; index++) {
        result += string;
    }
    return result;
};

// Do not edit below this line
module.exports = repeatString;
