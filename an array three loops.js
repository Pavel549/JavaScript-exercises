/* Form the following array with three loops:
[ 
	[ 
	[ 1, 2, 3, 4, 5 ], [ 1, 2, 3, 4, 5 ] 
	], 
	[ 
	[ 1, 2, 3, 4, 5 ], [ 1, 2, 3, 4, 5 ] 
	], 
	[ 
	[ 1, 2, 3, 4, 5 ], [ 1, 2, 3, 4, 5 ] 
	] 
] */

let arr = [];

for(let i = 0; i < 3; i++){
    arr[i] = [];
    for(let j = 0; j < 2; j++){
        arr[i][j] = [];
        for(let k = 0; k < 5; k++){
            arr[i][j][k] = k + 1
        }
    }
}

console.log(arr);