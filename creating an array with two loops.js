/* Create an array with two loops: 
[ [ 2, 4, 6 ], [ 8, 10, 12 ], [ 14, 16, 18 ], [ 20, 22, 24 ] ]*/

let arr = [];
let count = 0;

for (let i = 0; i < 4; i++) {
    arr[i] = [];
    
    for (let j = 0; j < 3; j++) {
        arr[i][j] = (count += 2);
    }
}

console.log(arr);