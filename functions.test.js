const { test, expect } = require("@jest/globals")
const { returnTwo, greeting, add, multiply, divide, subtract } = require('./functions')

const mathFunctions = {
    add,
    multiply,
    divide,
    subtract
}

describe('math functions', () => {
    test('Should return add or failed status', () => {
        expect(add(1, 'annie')).toEqual('failed')
        expect(add(5, 9, 2)).toEqual(14)
    }),
    test('Should return multiply or false status', () => {
        expect(multiply(1, 10)).toEqual(10)
        expect(multiply(0, 0)).toEqual(false)
    }),
    test('divide', () => {
        expect(divide(50, 5)).toEqual(10)
        expect(divide(8, 4)).toEqual(2)
    }),
    test('subtract', () => {
        expect(subtract(5, 3)).toEqual(2)
        expect(subtract(10, 1, 1)).toEqual(9)
    })
})



test("Should return 2", () => {
    expect(returnTwo(2)).toEqual(2)
})

test("Should return Hello ${name}", () => {
    expect(greeting("James")).toEqual("Hello, James")
    expect(greeting("Jill")).toEqual("Hello, Jill")
})

// test("Should return num1 + num2", () => {
//     expect(add(1, 2)).toEqual(3)
//     expect(add(5, 9)).toEqual(14)
// })

// test("Should return num1 * num2", () => {
//     expect(multiply(1, 10)).toEqual(10)
//     expect(multiply(5, 10)).toEqual(50)
// })

// test("Should return num1 / num2", () => {
//     expect(divide(50, 5)).toEqual(10)
//     expect(divide(8, 4)).toEqual(2)
// })

// test("Should return num1 - num2", () => {
//     expect(subtract(5, 3)).toEqual(2)
//     expect(subtract(10, 1)).toEqual(9)
// })