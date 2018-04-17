const deflated_of_100 = 82.64462809917356

const econojs = require('../../dist/index');

describe("Utility functions", () => {
    it("wicht defate", () => {
        expect(econojs.utils.deflate(100, 0.21)).toBe(deflated_of_100);
        expect(econojs.utils.deflate(121, 0.21)).toBe(100)
    });
});