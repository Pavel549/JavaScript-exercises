/* Write a function that takes a number as a parameter and divides 
it by 2 as many times as the result is less than 10. Let the 
function return the number of iterations it took to achieve the 
result. */

function func(num) {
    let count = 0
    for(let i = num; i > 10; i=(i/2) ){
        count++;
    }
    return count;
}

console.log( func(30) );