/* Create a function that will find the sum of the squares 
of the elements of an array. */

function summ(arr){
    let result = 0;
    for(elemArr of arr){
        result = result + Math.pow(elemArr, 2);
    }
    return result;
}

let arr = [1, 2, 3, 4, 5];
console.log( summ(arr) );