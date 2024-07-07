const findTheOldest = function(arr) {
    return arr.reduce((oldestPerson, currentPerson) => {
        let oldestPersonOld;
        let currentPersonOld;

        if(!oldestPerson.yearOfDeath) {
            oldestPersonOld = new Date().getFullYear() - oldestPerson.yearOfBirth;
        }
        else {
            oldestPersonOld = oldestPerson.yearOfDeath - oldestPerson.yearOfBirth;
        }

        if(!currentPerson.yearOfDeath) {
            currentPersonOld = new Date().getFullYear() - currentPerson.yearOfBirth;
        }
        else {
            currentPersonOld = currentPerson.yearOfDeath - currentPerson.yearOfBirth
        }

        if (oldestPersonOld > currentPersonOld) {
            return oldestPerson;
        }
        else {
            return currentPerson;
        }
    })
};

// Do not edit below this line
module.exports = findTheOldest;
