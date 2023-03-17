const { expect } = require("chai");
const isSymmetric = require("../05.checkForSymmetry");

describe("Symmetry Checker", () => {
                                                               
    it("returns true for symmetric array", () => { 
        expect(isSymmetric([1, 2, 2, 1])).to.be.true; 
    });

    it("return false for non-symmetric array", () => {
        expect(isSymmetric([1, 2, 3])).to.be.false;
    });

    it("return false with non-array argument", () => {
        expect(isSymmetric(121)).to.be.false;
    });

    it("returns true when length is odd", () => {
        expect(isSymmetric([1, 2, 1])).to.be.true;
    });

    it("returns true with symmetric string array", () => {
        expect(isSymmetric(["a", "b", "b", "a"])).to.be.true;
    });

    it("returns false for string param", () => {
        expect(isSymmetric("abba")).to.be.false;
    });

    it("returns false for type mismatched elements", () => {
        expect(isSymmetric([1, 2, "1"])).to.be.false;
    });
});