
const arrayAnalysis = (arr) => {
    if(arr.lengt === 0) {
        return null
    }

    return {
        average: arr.reduce((acc, cv) => acc + cv, 0) / arr.length,
        min: arr.reduce((a,b) => {
            return (b<a) ? b : a
        }),
        max: arr.reduce((a,b) =>{
            return (b>a) ? b: a 
        }),
        length: arr.length 

    }
}

module.exports = arrayAnalysis