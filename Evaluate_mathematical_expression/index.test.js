const Test = require("@codewars/test-compat/lib/assertions.js");
const { calc } = require("./index.js");

describe("Tests", () => {
    it("test", () => {
        const tests = [
            ['1+1', 2],
            ['1 - 1', 0],
            ['1* 1', 1],
            ['1 /1', 1],
            ['-123', -123],
            ['123', 123],
            ['2 /2+3 * 4.75- -6', 21.25],
            ['12* 123', 1476],
            ['2 / (2 + 3) * 4.33 - -6', 7.732],
        ];

        for ( const [input,expected] of tests )
            Test.assertEquals( calc(input), expected );
    });
});
