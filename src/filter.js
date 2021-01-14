const tail = require('./tail');

const filterArray = (arr, utilityFunction, resultArray) => {
    if(arr.length>0) {
        let element = utilityFunction(arr[0]);
        if (element) {
            resultArray.push(arr[0]);
        }
        return filterArray(tail(arr), utilityFunction, resultArray);
    }
    return resultArray;
}

const filter = (arr, utilityFunction) => {
    let resultArray = [];
    let filteredArray = filterArray(arr, utilityFunction, resultArray);
    return filteredArray;
}

module.exports = filter;