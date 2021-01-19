const { TestScheduler } = require("jest");

// test("runs our first test", () => {
//     //assertion when we compare to 2 things
//     expect(1 + 1).toBe(2)
// })

const calculator = require("./calculator")

describe("calculator unit test", () => {
    it("adds", () => {
        expect(calculator.sum(2,2)).toBe(4);
        expect(calculator.sum(2,3)).toBe(5)
        expect(calculator.sum(0,1)).toBe(1)
        expect(calculator.sum(-1,1)).toBe(0)
        expect(calculator.sum(1)).toBe(1)
        expect(calculator.sum()).toBe(0)
       //expect(calculator.sum("adela")).toBe(0) 
        expect(calculator.sum(1000000,200000)).toBe(1200000)
        
        //refcatore to support more params
        expect(calculator.sum(2,2,2)).toBe(6)
        expect(calculator.sum(1,2,3,4,5,6,7,8,9)).toBe(45)
    })

    it("subtracts", () => {
        expect(calculator.difference(3,2)).toBe(1)
        expect(calculator.difference(2,2)).toBe(0)
        expect(calculator.difference(1,2)).toBe(-1)
        expect(calculator.difference(-1,-2)).toBe(1)
        expect(calculator.difference(1)).toBe(1)
        expect(calculator.difference()).toBe(0)
    })

    it("multiplies", () => {
        expect(calculator.multiply(2,4)).toBe(8)
        expect(calculator.multiply(3,-4)).toBe(-12)
        expect(calculator.multiply(-3,-4)).toBe(12)
        expect(calculator.multiply(3,0)).toBe(0)
        expect(calculator.multiply(3,1)).toBe(3)
        expect(calculator.multiply()).toBe(0)
        expect(calculator.multiply(1)).toBe(0)

    })

    it("divides", () => {
        expect(calculator.quotient(2,1)).toBe(2)
        expect(calculator.quotient(2,5)).toBe(0.4)
        expect(calculator.quotient(6,3)).toBe(2)
        expect(calculator.quotient(0,5)).toBe(0)

        expect(() => calculator.quotient(4,0)).toThrow()

        expect(calculator.quotient(2,-5)).toBe(-0.4)
        expect(calculator.quotient(-2,-5)).toBe(0.4)
        expect(calculator.quotient(1)).toBe(1)
        expect(calculator.quotient()).toBe(0)
    })

    it("parses", () => {
        expect(calculator.parse({
            sum: [1,2,3],
            difference: [3,2,1],
            product: [1,2,3],
            quotient:[2,2,2]
        })).toEqual({
            sum: 6,
            difference: 0,
            product: 6,
            quotient: 0.5
        })
        //to equal for more complex values as an object
    })
})



