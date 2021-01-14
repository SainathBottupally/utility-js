const min = require('./min');

describe("min", ()=>{
    it("min of [] should give null", ()=>{
        expect(min([])).toEqual(null);
    });

    it("min [1,2,3, 4] should give 4", ()=>{
        expect(min([1, 2, 3,  4])).toEqual(1);
    });
    
    it("min of [1, 2, -3] should give 2", ()=>{
        expect(min([1, 2, -3])).toEqual(-3);
    });
})