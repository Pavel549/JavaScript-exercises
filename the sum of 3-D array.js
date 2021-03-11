/* Count the sum of the 3-D array:
[ [ [1, 2], [3, 4], ], [ [5, 6], [7, 8], ], ] */

let arr = [
    [
        [1, 2],
        [3, 4],
    ],
    [
        [5, 6],
        [7, 8],
    ],
];

let result = 0

for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < arr[i].length; j++){
        for(let k = 0; k < arr[i][j].length; k++){
            result += arr[i][j][k];
        }
    }
}
console.log(result); 
            