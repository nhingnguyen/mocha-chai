// https://www.chaijs.com/guide/styles/

const chai = require("chai");
const should = chai.should();
const { add, isEven } = require("../src/math");

describe("math.js (should skeleton)", () => {
  describe("add()", () => {
    it.skip("should add two numbers correctly", () => {
      // TODO: add(2, 3).should.equal(5)
    });

    it.skip("should throw an error if inputs are not numbers", () => {
      // TODO: (() => add(2, "a")).should.throw("Inputs must be numbers")
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

