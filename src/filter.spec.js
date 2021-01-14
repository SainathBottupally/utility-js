const filterUpperCase = require('./filter');

describe("Filter", ()=>{
    it("ilter([], x => true) should give []", ()=>{

        let expected = [].filter(x => true);

        expect(expected).toEqual([]);
    });

    it("filter([1,2,3],x => true) should give [1,2,3]", ()=>{
        let expected = [1, 2, 3].filter(x => true);

        expect(expected).toEqual([1, 2, 3]);
    });
    
    it("filter([1,2,3],x => false) should give []", ()=>{
        let expected = [1, 2, 3].filter(x => false);
        expect(expected).toEqual([]);
    });

    it("filter([1,2,3],x => x > 1) should give [2,3]", ()=>{
        let expected = [1, 2, 3].filter(x => x > 1);
        expect(expected).toEqual([2, 3]);
    });

    it("filter(['a','B','c','D'], filterUpperCase) should be [B,D]", ()=>{
        let expected = ['a','B','c','D'].filter(filterUpperCase);
        expect(expected).toEqual(['B', 'D']);
    });
})