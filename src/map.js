const map = (elements, operation)=>{
    if(operation == 'cube'){
        return cube(elements);
    }    
    if(operation == 'identity'){
        return identity(elements);
    }
}

function cube(elements){
    return elements.map(ele=>{
        return ele**3;
    });
}

function identity(elements){
    return elements;
}

module.exports = map;