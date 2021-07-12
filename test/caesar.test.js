const caesar = require("../src/caesar");
const expect = require("chai").expect;

describe("caesar", () => {
	it("should encode a message correctly", () => {
		const expected = "wklqnixo";
        const actual = caesar("thinkful", 3);
        expect(actual).to.equal(expected)
	});
	
	it("should return false if the shift amount is 0", () => {
		const expected = false;
        const actual = caesar("thinkful", 0);
        expect(actual).to.equal(expected)
	});
	it("should return false if the shift amount is above 25", () => {
		const expected = false;
        const actual = caesar("thinkful", 99);
        expect(actual).to.equal(expected)
	});
	it("should ignore capital letters", () => {
		const expected = "wklqnixo";
        const actual = caesar("ThinkfUl", 3);
        expect(actual).to.equal(expected)
	});
	it("should allow for a negative shift that will shift to the left", () => {
		const expected = "y";
        const actual = caesar("b", -3);
        expect(actual).to.equal(expected)
	});
	
});