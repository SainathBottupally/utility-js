describe("Filter", ()=>{
    // it("reduce([],(x,y)=>x+y) should be undefined", ()=>{

    //     let expected = [].reduce((x,y)=>x+y);

    //     expect(expected).toEqual(undefined);
    // });

    it("reduce([],v(x,y)=>x+y,10)` should be 10", ()=>{
        let expected = [].reduce((x,y)=>x+y, 10)

        expect(expected).toEqual(10);
    });
    
    it("reduce(['a','b','c'],(x,y)=>x+y)` should be `abc`", ()=>{
        let expected = ['a','b','c'].reduce((x,y)=>x+y)
        expect(expected).toEqual('abc');
    });

    it("filter([1,2,3],x => x > 1) should give [2,3]", ()=>{
        let expected = [1, 2, 3].filter(x => x > 1);
        expect(expected).toEqual([2, 3]);
    });

    it("reduce(['a','b','c'],(x,y)=>x+y,’z’),` should be `zabc`", ()=>{
        let expected = ['a','b','c'].reduce((x, y)=>x+y, 'z');
        expect(expected).toEqual('zabc');
    });
})