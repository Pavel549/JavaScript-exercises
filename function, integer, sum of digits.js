/* Create a function which takes an integer as a parameter and 
returns the sum of his digits. */

function sum(num){
    let result = 0;
    let str = String(num);
    let arr = str.split('');
    for(elem of arr){
        result += Number(elem);
    }
    return result;
}

console.log( sum(343) );