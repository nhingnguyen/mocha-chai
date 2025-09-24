// https://www.chaijs.com/guide/styles/

const chai = require("chai");
const should = chai.should();
const { add, subtract } = require("../src/math");

describe("math.js (should skeleton)", () => {
  describe("add()", () => {
    it("should add two numbers correctly", () => {
      add(2, 3).should.equal(5);
    });

    it("should throw an error if inputs are not numbers", () => {
      (() => add(2, "a")).should.throw("Inputs must be numbers");
    });
  });

  describe("subtract()", () => {
    it("should subtract two numbers correctly", () => {
      subtract(5, 3).should.equal(2);
    });

    it("should throw an error if inputs are not numbers", () => {
      (() => subtract("a", 3)).should.throw("Inputs must be numbers");
    });
  });
});
