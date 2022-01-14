import { expect } from "chai";
import { sumArray } from "../app";

describe("Calculator function", () => {
    describe("Result positive and negative", () => {
        it("Return  [7,2]", () => {
            const result = new sumArray()
            expect(result.calculate(9)).to.include.members([7, 2])

        })
        it("Return ![7,2]", () => {
            const result = new sumArray()
            expect(result.calculate(11)).to.not.include.members([7, 2])

        })
    })
})