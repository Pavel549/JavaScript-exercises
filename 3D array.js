/* Form the futher array using three loops: 
[ [ [ 1, 2 ], [ 3, 4 ] ], [ [ 5, 6 ], [ 7, 8 ] ] ] */

let arr = [];
let count = 1;

for (let i = 0; i < 2; i++) {
    arr[i] = [];
    
    for (let j = 0; j < 2; j++) {
        arr[i][j] = [];
        for(let k = 0; k < 2; k++){
            arr[i][j][k] = count++;
        }
    }
}

console.log(arr);