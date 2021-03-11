/* Create the function, which will take a 
number as a parameter and return an array of his divisors, 
that is, the numbers by which our number is divided. */

function divisors(num) {
    let arr = [];

    for (let i = 0; i <= num; i++) {
        if (num % i === 0) {
            arr.push(i)
        }
    }
    return arr;
}

console.log(divisors(36));