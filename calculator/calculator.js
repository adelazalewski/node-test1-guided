function sum(...values) {
    //values will be an array of how ever many parmas we have
    //take pairs of values out of the array 
    //and add them together untill the end is reached
    //initial value is 0
    return values.reduce((a,b) => a + b, 0)
}

function difference(...values) {
    return values.slice(1).reduce((a,b) => a - b, values[0] || 0)
}

function multiply(...values) {
    return values.reduce((a,b) => a * b, 1 || 0 )
}
function quotient(...values) {
    if(values.slice(1).indexOf(0) > -1){
        throw new Error("can not devide by 0")
    }else{
        return values.slice(1).reduce((a,b) => a / b, values[0] || 0)
    }
    
}

function parse(obj) {
    const result = {}
        if(Array.isArray(obj.sum)) {
            //using the spread operator here takes array value and spreds it out as params. like calling sum(obj.sum[0], obj.sum[1], obj.sum[2])
            result.sum = sum(...obj.sum)
        }
        if(Array.isArray(obj.difference)) {
            result.difference = difference(...obj.difference)
        }
        if(Array.isArray(obj.product)){
            result.product = multiply(...obj.product)
        }
        if(Array.isArray(obj.quotient)){
            result.quotient = quotient(...obj.quotient)
        }
    

    return result
}

module.exports = {
    sum,
    difference,
    multiply,
    quotient,
    parse
}