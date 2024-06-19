const sumAll = function (firstNum, secondNum) {
    let result = 0;
    let firstNumType = typeof firstNum;
    let secondNumType = typeof secondNum;

    if (firstNumType != "number" || secondNumType != "number") {
        return "ERROR";
    }

    else {
        if (firstNum > 0 && secondNum > 0) {
            let minNum, maxNum;
            if (firstNum > secondNum) {
                maxNum = firstNum;
                minNum = secondNum;
            }
            else {
                maxNum = secondNum;
                minNum = firstNum;
            }

            for (let num = minNum; num <= maxNum; num++) {
                result += num;
            }

            return result;
        }

        else {
            return "ERROR";
        }
    }

};

// Do not edit below this line
module.exports = sumAll;
