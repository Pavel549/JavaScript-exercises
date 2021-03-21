/* Write a function that will take the parameters an arbitrary 
number of numbers and return their arithmetic average 
(amount to divide by quantity). */

function func(...nums) {
    let sum = 0;
    for (let elem of nums) {
       sum += elem;
    }
    return sum / nums.length;
}
console.log(func(1, 2, 3, 5, 7, 9));