let num = {
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
    20: "twenty",
    30: "thirty",
    40: "forty",
    50: "fifty",
    60: "sixty",
    70: "seventy",
    80: "eighty",
    90: "ninety"
}
module.exports = function toReadable(number) {


    if (number < 21 && number >= 0) {
        return num[number]
    } else if (number < 100 && number % 10 == 0) {
        return num[number]
    } else if (number > 20 && number < 30) {
        return num[20] + ' ' + num[number - 20]
    } else if (number > 30 && number < 40) {
        return num[30] + ' ' + num[number - 30]
    } else if (number > 40 && number < 50) {
        return num[40] + ' ' + num[number - 40]
    } else if (number > 50 && number < 60) {
        return num[50] + ' ' + num[number - 50]
    } else if (number > 60 && number < 70) {
        return num[60] + ' ' + num[number - 60]
    } else if (number > 70 && number < 80) {
        return num[70] + ' ' + num[number - 70]
    } else if (number > 80 && number < 90) {
        return num[80] + ' ' + num[number - 80]
    } else if (number > 90 && number < 100) {
        return num[90] + ' ' + num[number - 90]
    } else if (number == 100) {
        return "one hundred"
    } else if (number > 99 && number < 200) {
        let res = "one hundred "
        number = number - 100
        if (number < 21 && number >= 0) {
            return res + num[number]
        } else if (number <= 100 && number % 10 == 0) {
            return res + num[number]
        } else if (number > 20 && number < 30) {
            return res + num[20] + ' ' + num[number - 20]
        } else if (number > 30 && number < 40) {
            return res + num[30] + ' ' + num[number - 30]
        } else if (number > 40 && number < 50) {
            return res + num[40] + ' ' + num[number - 40]
        } else if (number > 50 && number < 60) {
            return res + num[50] + ' ' + num[number - 50]
        } else if (number > 60 && number < 70) {
            return res + num[60] + ' ' + num[number - 60]
        } else if (number > 70 && number < 80) {
            return res + num[70] + ' ' + num[number - 70]
        } else if (number > 80 && number < 90) {
            return res + num[80] + ' ' + num[number - 80]
        } else if (number > 90 && number < 100) {
            return res + num[90] + ' ' + num[number - 90]
        }
    }



    else if (number == 200) {
        return "two hundred"
    } else if (number > 200 && number < 300) {
        let res = "two hundred "
        number = number - 200
        if (number < 21 && number >= 0) {
            return res + num[number]
        } else if (number <= 100 && number % 10 == 0) {
            return res + num[number]
        } else if (number > 20 && number < 30) {
            return res + num[20] + ' ' + num[number - 20]
        } else if (number > 30 && number < 40) {
            return res + num[30] + ' ' + num[number - 30]
        } else if (number > 40 && number < 50) {
            return res + num[40] + ' ' + num[number - 40]
        } else if (number > 50 && number < 60) {
            return res + num[50] + ' ' + num[number - 50]
        } else if (number > 60 && number < 70) {
            return res + num[60] + ' ' + num[number - 60]
        } else if (number > 70 && number < 80) {
            return res + num[70] + ' ' + num[number - 70]
        } else if (number > 80 && number < 90) {
            return res + num[80] + ' ' + num[number - 80]
        } else if (number > 90 && number < 100) {
            return res + num[90] + ' ' + num[number - 90]
        }
    }


    else if (number == 300) {
        return "three hundred"
    } else if (number > 300 && number < 400) {
        let res = "three hundred "
        number = number - 300
        if (number < 21 && number >= 0) {
            return res + num[number]
        } else if (number <= 100 && number % 10 == 0) {
            return res + num[number]
        } else if (number > 20 && number < 30) {
            return res + num[20] + ' ' + num[number - 20]
        } else if (number > 30 && number < 40) {
            return res + num[30] + ' ' + num[number - 30]
        } else if (number > 40 && number < 50) {
            return res + num[40] + ' ' + num[number - 40]
        } else if (number > 50 && number < 60) {
            return res + num[50] + ' ' + num[number - 50]
        } else if (number > 60 && number < 70) {
            return res + num[60] + ' ' + num[number - 60]
        } else if (number > 70 && number < 80) {
            return res + num[70] + ' ' + num[number - 70]
        } else if (number > 80 && number < 90) {
            return res + num[80] + ' ' + num[number - 80]
        } else if (number > 90 && number < 100) {
            return res + num[90] + ' ' + num[number - 90]
        }
    }

    else if (number == 400) {
        return "four hundred"
    } else if (number > 400 && number < 500) {
        let res = "four hundred "
        number = number - 400
        if (number < 21 && number >= 0) {
            return res + num[number]
        } else if (number <= 100 && number % 10 == 0) {
            return res + num[number]
        } else if (number > 20 && number < 30) {
            return res + num[20] + ' ' + num[number - 20]
        } else if (number > 30 && number < 40) {
            return res + num[30] + ' ' + num[number - 30]
        } else if (number > 40 && number < 50) {
            return res + num[40] + ' ' + num[number - 40]
        } else if (number > 50 && number < 60) {
            return res + num[50] + ' ' + num[number - 50]
        } else if (number > 60 && number < 70) {
            return res + num[60] + ' ' + num[number - 60]
        } else if (number > 70 && number < 80) {
            return res + num[70] + ' ' + num[number - 70]
        } else if (number > 80 && number < 90) {
            return res + num[80] + ' ' + num[number - 80]
        } else if (number > 90 && number < 100) {
            return res + num[90] + ' ' + num[number - 90]
        }
    }


    else if (number == 500) {
        return "five hundred"
    } else if (number > 500 && number < 600) {
        let res = "five hundred "
        number = number - 500
        if (number < 21 && number >= 0) {
            return res + num[number]
        } else if (number <= 100 && number % 10 == 0) {
            return res + num[number]
        } else if (number > 20 && number < 30) {
            return res + num[20] + ' ' + num[number - 20]
        } else if (number > 30 && number < 40) {
            return res + num[30] + ' ' + num[number - 30]
        } else if (number > 40 && number < 50) {
            return res + num[40] + ' ' + num[number - 40]
        } else if (number > 50 && number < 60) {
            return res + num[50] + ' ' + num[number - 50]
        } else if (number > 60 && number < 70) {
            return res + num[60] + ' ' + num[number - 60]
        } else if (number > 70 && number < 80) {
            return res + num[70] + ' ' + num[number - 70]
        } else if (number > 80 && number < 90) {
            return res + num[80] + ' ' + num[number - 80]
        } else if (number > 90 && number < 100) {
            return res + num[90] + ' ' + num[number - 90]
        }
    }


    else if (number == 600) {
        return "six hundred"
    } else if (number > 600 && number < 700) {
        let res = "six hundred "
        number = number - 600
        if (number < 21 && number >= 0) {
            return res + num[number]
        } else if (number <= 100 && number % 10 == 0) {
            return res + num[number]
        } else if (number > 20 && number < 30) {
            return res + num[20] + ' ' + num[number - 20]
        } else if (number > 30 && number < 40) {
            return res + num[30] + ' ' + num[number - 30]
        } else if (number > 40 && number < 50) {
            return res + num[40] + ' ' + num[number - 40]
        } else if (number > 50 && number < 60) {
            return res + num[50] + ' ' + num[number - 50]
        } else if (number > 60 && number < 70) {
            return res + num[60] + ' ' + num[number - 60]
        } else if (number > 70 && number < 80) {
            return res + num[70] + ' ' + num[number - 70]
        } else if (number > 80 && number < 90) {
            return res + num[80] + ' ' + num[number - 80]
        } else if (number > 90 && number < 100) {
            return res + num[90] + ' ' + num[number - 90]
        }
    }


    else if (number == 700) {
        return "seven hundred"
    } else if (number > 700 && number < 800) {
        let res = "seven hundred "
        number = number - 700
        if (number < 21 && number >= 0) {
            return res + num[number]
        } else if (number <= 100 && number % 10 == 0) {
            return res + num[number]
        } else if (number > 20 && number < 30) {
            return res + num[20] + ' ' + num[number - 20]
        } else if (number > 30 && number < 40) {
            return res + num[30] + ' ' + num[number - 30]
        } else if (number > 40 && number < 50) {
            return res + num[40] + ' ' + num[number - 40]
        } else if (number > 50 && number < 60) {
            return res + num[50] + ' ' + num[number - 50]
        } else if (number > 60 && number < 70) {
            return res + num[60] + ' ' + num[number - 60]
        } else if (number > 70 && number < 80) {
            return res + num[70] + ' ' + num[number - 70]
        } else if (number > 80 && number < 90) {
            return res + num[80] + ' ' + num[number - 80]
        } else if (number > 90 && number < 100) {
            return res + num[90] + ' ' + num[number - 90]
        }
    }
    else if (number == 800) {
        return "eight hundred"
    } else if (number > 800 && number < 900) {
        let res = "eight hundred "
        number = number - 800
        if (number < 21 && number >= 0) {
            return res + num[number]
        } else if (number <= 100 && number % 10 == 0) {
            return res + num[number]
        } else if (number > 20 && number < 30) {
            return res + num[20] + ' ' + num[number - 20]
        } else if (number > 30 && number < 40) {
            return res + num[30] + ' ' + num[number - 30]
        } else if (number > 40 && number < 50) {
            return res + num[40] + ' ' + num[number - 40]
        } else if (number > 50 && number < 60) {
            return res + num[50] + ' ' + num[number - 50]
        } else if (number > 60 && number < 70) {
            return res + num[60] + ' ' + num[number - 60]
        } else if (number > 70 && number < 80) {
            return res + num[70] + ' ' + num[number - 70]
        } else if (number > 80 && number < 90) {
            return res + num[80] + ' ' + num[number - 80]
        } else if (number > 90 && number < 100) {
            return res + num[90] + ' ' + num[number - 90]
        }
    }
    else if (number == 900) {
        return "nine hundred"
    } else if (number > 900 && number < 1000) {
        let res = "nine hundred "
        number = number - 900
        if (number < 21 && number >= 0) {
            return res + num[number]
        } else if (number <= 100 && number % 10 == 0) {
            return res + num[number]
        } else if (number > 20 && number < 30) {
            return res + num[20] + ' ' + num[number - 20]
        } else if (number > 30 && number < 40) {
            return res + num[30] + ' ' + num[number - 30]
        } else if (number > 40 && number < 50) {
            return res + num[40] + ' ' + num[number - 40]
        } else if (number > 50 && number < 60) {
            return res + num[50] + ' ' + num[number - 50]
        } else if (number > 60 && number < 70) {
            return res + num[60] + ' ' + num[number - 60]
        } else if (number > 70 && number < 80) {
            return res + num[70] + ' ' + num[number - 70]
        } else if (number > 80 && number < 90) {
            return res + num[80] + ' ' + num[number - 80]
        } else if (number > 90 && number < 100) {
            return res + num[90] + ' ' + num[number - 90]
        }
    }
}
