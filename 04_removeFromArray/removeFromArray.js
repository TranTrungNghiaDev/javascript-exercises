const removeFromArray = function(array, ...numbers) {
    if (numbers.length > 0) {
        for (const number of numbers) {
            let indexNum = array.indexOf(number);

            while(indexNum >= 0) {
                array.splice(indexNum, 1);
                indexNum = array.indexOf(number);
            }
        }
    }

    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
