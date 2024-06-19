const reverseString = function(originString) {
    const charArr = originString.split("");
    let newString = "";

    for (let index = charArr.length - 1; index >= 0; index--) {
        newString += charArr[index];
    }

    return newString;
};

// Do not edit below this line
module.exports = reverseString;
