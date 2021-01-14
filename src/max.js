const max = elements=>{
    if(elements.length > 0){
        let max = elements[0];
        elements.forEach(element => {
            if(element > max)
                max = element;
        });
        return max;
    }else{
        return null;
    }
}

module.exports = max;