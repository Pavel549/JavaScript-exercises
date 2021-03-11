/* Count the sum of the 2-D array:
[[1, 2], [3, 4], [5, 6]] */

let arr = [[1, 2], [3, 4], [5, 6]];
let result = 0

for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < arr[i].length; j++){	
    result += arr[i][j]
    }
}

console.log(result);