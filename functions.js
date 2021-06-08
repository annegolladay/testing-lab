

module.exports = {
    returnTwo: (num) => {
        return 2
    },
    greeting: (name) => {
        return `Hello, ${name}`
    },
    add: (num1, num2) => {
        let sum = num1 + num2
        if (typeof sum === 'number') {
            return num1 + num2
        } else {
            return 'failed'
        }
    },
    multiply: (num1, num2) => {
        if (num1 * num2) {
            return num1 * num2
        } else {
            return false
        }
    },
    divide: (num1, num2) => {
        return num1 / num2
    },
    subtract: (num1, num2) => {
        return num1 - num2
    }
}

