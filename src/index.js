const untilNine = {
    0: "zero",
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
};
const untilNineteen = {
    10: "ten",
    11: "eleven",
    12: "twelve",
    13: "thirteen",
    14: "fourteen",
    15: "fifteen",
    16: "sixteen",
    17: "seventeen",
    18: "eighteen",
    19: "nineteen",
};
const untilHundred = {
    20: "twenty",
    30: "thirty",
    40: "forty",
    50: "fifty",
    60: "sixty",
    70: "seventy",
    80: "eighty",
    90: "ninety",
};

module.exports = function toReadable(number) {
    let num = String(number);

    const funUntilNine = (num) => {
        for (let item in untilNine) {
            if (item == num) return untilNine[item];
        }
    };

    const funUntilHundred = (num) => {
        let word = "";
        if (num[0] == "1") {
            for (let item in untilNineteen) {
                if (item == num) return untilNineteen[item];
            }
        } else {
            for (let item in untilHundred) {
                if (item == num[0] + "0") word += untilHundred[item];
            }
            if (num[1] == "0") {
                return word;
            } else {
                for (let item in untilNine) {
                    if (item == num[1]) return (word += " " + untilNine[item]);
                }
            }
        }
    };

    if (num.length == 1) {
        return funUntilNine(num);
    }

    if (num.length == 2) {
        return funUntilHundred(num);
    }

    if (num.length == 3) {
        let word = "";
        for (let item in untilNine) {
            if (item == num[0]) word += untilNine[item] + " " + "hundred";
        }
        if (num[1] + num[2] == "00") return word.trim();
        if (num[1] == "0") return word + " " + funUntilNine(num[2]);
        return word + " " + funUntilHundred(num[1] + num[2]);
    }
};
