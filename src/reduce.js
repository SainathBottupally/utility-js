const tail = require('./tail');

const reduceArray = (arr, utilityFunction, result) => {
    // console.log("result=> ", result);
    if(arr.length>0) {
        result = utilityFunction(result, arr[0]);
        return reduceArray(tail(arr), utilityFunction, result);
    }
    return result;
}

const reduce = (arr, utilityFunction, additionalParam) => {
    // console.log("Array=> ", arr);
    // console.log("fun=> ", utilityFunction);
    // console.log("additional params=> ", additionalParam);
    let result;
    if(additionalParam)
        result = additionalParam;
    else
        result = '';
    let reducedResult = reduceArray(arr, utilityFunction, result);
    if(reducedResult === '')
        return undefined;
    else 
        return reducedResult;
}

module.exports = reduce;