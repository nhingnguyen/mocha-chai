// https://www.chaijs.com/guide/styles/

const { expect } = require("chai");
const { mod, divide } = require("../src/math");

describe("math.js (expect skeleton)", () => {
  describe("mod()", () => {
    it("should return the remainder of division", () => {
      expect(mod(10, 3)).to.equal(1)
    });

    it("should throw an error if inputs are not numbers", () => {
      expect(() => mod("a", 3)).to.throw("Inputs must be numbers")
    });
  });

  describe("divide()", () => {
    it("should divide two numbers correctly", () => {
      expect(divide(10, 2)).to.equal(5)
    });

    it("should throw an error if inputs are not numbers", () => {
      expect(() => divide(10, "a")).to.throw("Inputs must be numbers")
    });

    it("should throw an error when dividing by zero", () => {
      expect(() => divide(10, 0)).to.throw("Cannot divide by zero")
    });
  });
});
