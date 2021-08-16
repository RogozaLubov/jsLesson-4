//task1//
let arrOne =[1,2,3,4,5];
let reduceValue = arrOne.reduce(function( previousValue, item, index, array ){
    return item + previousValue ;
}, 0);
console.log (reduceValue);

//task2//

let arrTwo = ['Ann', 'Baddy', 'Sem',];
console.log (arrTwo.indexOf('Baddy'));
console.log (arrTwo.indexOf('Lyubov'));
console.log (arrTwo.indexOf('Ann',2));

//task3//
let arrThree = [1,2,3];
let arrFour = [4,5,6];
let arrFive = arrThree.concat(arrFour);
console.log (arrFive);