const tail = require('./tail');

const filterArray = (arr, utilityFunction, resultArray) => {
    if(arr.length>0) {
        let element = utilityFunction(arr[0]);
        resultArray.push(element);
        return filterArray(tail(arr), utilityFunction, resultArray);
    }
    return resultArray;
}

const map = (arr, utilityFunction) => {
    let resultArray = [];
    let filteredArray = filterArray(arr, utilityFunction, resultArray);
    return filteredArray;
}

module.exports = map;