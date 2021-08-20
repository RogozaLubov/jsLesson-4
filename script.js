// task1//

//Исправленo//
let arrOne =[1,2,3,4,5];
function arrSumOne(array){
    let sum =0;
    for (let i=0; i<array.lenght;i++){
        sum+= array[i];
    }
    return sum
}
console.log (arrSumOne(arrOne))


//task2//


function value(inArr, inFunction){
    let outArr =[];
    for (let i=0, n=-1; i<inArr.lenght;i++){
    if (inArr[i]==inFunction[0] ){
        n++;
        outArr [n] =i;
    }
    }
    if (outArr.length==0)return -1;
    else return (outArr);
}

// //task3//
function arr (array1, array2){
    let array3 =[];
    for(var i = 0; i < array1.length; ++i) array3 [i]= array1[i];
    for(var i = 0; i< array2.length; ++i) array3 [array1.length+i]= array2[i];
    return array3;
}
