const tail = elements =>{
    if(elements.length > 0){
        return elements.slice(1, elements.length);
    }else{
        return [];
    }
}

module.exports = tail;