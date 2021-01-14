const max = require('./max');

describe("Max", ()=>{
    it("max of [] should give null", ()=>{
        expect(max([])).toEqual(null);
    });

    it("max [1,2,3, 4] should give 4", ()=>{
        expect(max([1, 2, 3,  4])).toEqual(4);
    });
    
    it("max of [1, 2, -3] should give 2", ()=>{
        expect(max([1, 2, -3])).toEqual(2);
    });
})