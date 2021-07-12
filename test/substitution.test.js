// Write your tests here!
const expect = require("chai").expect;
const substitution = require("../src/substitution")

describe("substitution", () => {
    it("should return false if the substitution alphabet does not contain unique character", () => {
        const expected = false
        const actual = substitution("thinkful", "abcabcabcabcabcabcabcabcyz")
        expect(actual).to.equal(expected)
    })
    it("should return false if the substitution alphabet is not exactly 26 characters", () => {
        const expected = false
        const actual = substitution("thinkful", "short"); 
        expect(actual).to.equal(expected)
    })
    it("should encode a message by using the given substitution alphabet", () => {
        const expected = 'jrufscpw'
        const actual = substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev")
        expect(actual).to.equal(expected)
    })
    it("should preserve spaces", () => {
        const expected = 'elp xhm xf mbymwwmfj dne'
        const actual = substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev");
        expect(actual).to.equal(expected)
    })
    it("should decode a message by using the given substitution alphabet", () => {
        const expected = "message"
        const actual = substitution("y&ii$r&", "$wae&zrdxtfcygvuhbijnokmpl", false)
        expect(actual).to.equal(expected)
    })
})