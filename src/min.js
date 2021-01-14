const min = elements=>{
    if(elements.length > 0){
        let minimum = elements[0];
        elements.forEach(element => {
            if(element < minimum)
            minimum = element;
        });
        return minimum;
    }else{
        return null;
    }
}

module.exports = min;