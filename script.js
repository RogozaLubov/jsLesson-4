//task1//
let arrOne =[1,2,3,4,5];
let reduceValue = arrOne.reduce(function( previousValue, item, index, array ){
    return item + previousValue ;
}, 0);
console.log (reduceValue);