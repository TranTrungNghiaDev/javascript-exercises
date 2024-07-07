const palindromes = function (string) {
    /*
    string = string.toLowerCase();
    let chars = "qwertyuiopasdfghjklzxcvbnm123456789";
    let originString = "";
    let reverseString = "";

    for (let index = 0; index < string.length; index++) {
        if (chars.includes(string[index])) {
            originString += string[index];
        }
    }

    for (let index = originString.length -1; index >= 0; index--) {
       reverseString += originString[index];
    }

    if(originString === reverseString) {
        return true;
    }

    else {
        return false;
    }
    */
    let chars = "qwertyuiopasdfghjklzxcvbnm0123456789";

    let cleanString = string
    .toLowerCase()
    .split("")
    .filter((char) => chars.includes(char))
    .join("");

    let reverseString = cleanString.split("").reverse().join("");

    return cleanString === reverseString;
};

// Do not edit below this line
module.exports = palindromes;
