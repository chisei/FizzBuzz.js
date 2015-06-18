"use strict";

var FizzBuzzer = {
    fizzBuzz: function (val) {
        var string = val;
        if (val < 1) {
            throw new Error('This value should be greater than zero.');
        }

        if (val !== parseInt(val)) {
            throw new Error('This value should be number.');
        }

        if (val % 15 === 0) {
            string = 'Fizz Buzz';
        } else if (val % 3 === 0) {
            string = 'Fizz';
        } else if (val % 5 === 0) {
            string = 'Buzz';
        }

        return string;
    }
}

module.exports = FizzBuzzer;
