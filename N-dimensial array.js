// N-dimensial array

let arr = [];
let k = 1;

for (let i = 0; i < 2; i++) {
    arr[i] = [];
    
    for (let j = 0; j < 2; j++) {
        arr[i][j] = [];

        for (let x = 0; x < 2; x++) {
        arr[i][j][x] = k;
        k++;
        }
    }
}

console.log(arr);
