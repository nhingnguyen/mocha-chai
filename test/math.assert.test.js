// https://www.chaijs.com/guide/styles/

const assert = require("chai").assert;
const { add, isEven } = require("../src/math");

describe("math.js (assert skeleton)", () => {
  describe("add()", () => {
    it.skip("should add two numbers correctly", () => {
      // TODO: assert.equal(add(2, 3), 5)
    });

    it.skip("should throw an error if inputs are not numbers", () => {
      // TODO: assert.throws(() => add(2, "a"), "Inputs must be numbers")
    });
  });

  describe("isEven()", () => {
    it.skip("should return true for even numbers", () => {
      // TODO
    });

    it.skip("should return false for odd numbers", () => {
      // TODO
    });

    it.skip("should throw an error if input is not a number", () => {
      // TODO
    });
  });
});

