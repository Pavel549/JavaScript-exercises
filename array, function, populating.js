/* Create a function that populates an array with integers from the 
start to the end given numbers. */

function func(num1, num2){
    let arr = [];

    for(let i = num1; i <= num2; i++){
        arr.push(i)
    }
        return arr;
    }

console.log( func(3, 7) ); 