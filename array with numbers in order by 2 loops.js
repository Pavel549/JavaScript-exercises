/* Form an array filled with numbers in order using two 
loops:[ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ], [ 7, 8 ] ] */

let arr = [];
let count = 1;

for (let i = 0; i < 4; i++) {
    arr[i] = [];
    
    for (let j = 0; j < 2; j++) {
        arr[i][j] = count++;
    }
}

console.log(arr);