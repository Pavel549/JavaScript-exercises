/* Create a function, which gets like parameter an array and the 
function, squaring each value in array. */

function each(arr, func) {
    let arr1 = [];
    for (let elem of arr) {
        arr1.push(func(elem));
    }
    console.log(arr1);
}

function square(num) {
    return num * num;
}

each([1, 2, 3], square);