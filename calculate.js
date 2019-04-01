var exports = module.exports={};
exports.sum = function(a,b)
{   
    var c = a + b;
    if ( !Number.isInteger(a) || !Number.isInteger(b)) {
        throw new TypeError('sum() expects only numbers.')
    }
    return c;
};

exports.minus = function(a,b)
{   
    var c = a - b;
    if ( !Number.isInteger(a) || !Number.isInteger(b)) {
        throw new TypeError('sum() expects only numbers.')
    }
    return c;
};

exports.multi = function(a,b)
{   
    var c = a * b;
    if ( !Number.isInteger(a) || !Number.isInteger(b)) {
        throw new TypeError('sum() expects only numbers.')
    }
    return c;
};

exports.divide = function(a,b)
{   
    var c = a / b;
    if(b == 0){
        throw new TypeError('sum() expects numbers != 0')
    }
    if ( !Number.isInteger(a) || !Number.isInteger(b) ) {
        throw new TypeError('sum() expects only numbers.')
    }
    return c;
};

// const sum = function(a,b){
//     var c = a + b;
//     if ( !Number.isInteger(a) || !Number.isInteger(b)) {
//         throw TypeError('sum() expects only numbers.')
//     }
//     return c;
// }
// module.exports={sum}