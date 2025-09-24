// https://www.chaijs.com/guide/styles/

const assert = require("chai").assert;
const { multiply, isEven } = require("../src/math");

describe("math.js (assert skeleton)", () => {
  describe("multiply()", () => {
    it("should multiply two numbers correctly", () => {
      assert.equal(multiply(6, 3), 18);
    });

    it("should throw an error if inputs are not numbers", () => {
      assert.throws(() => multiply(2, "a"), "Inputs must be numbers");
    });
  });

  describe("isEven()", () => {
    it("should return true for even numbers", () => {
      assert.isTrue(isEven(2));
    });

    it("should return false for odd numbers", () => {
      assert.isFalse(isEven(3));
    });

    it("should throw an error if input is not a number", () => {
      assert.throws(() => isEven("a"), "Input must be a number");
    });
  });
});

