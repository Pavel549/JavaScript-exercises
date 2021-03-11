/* Display the sum of the functions of the array by 
iterating it. */

let arr = [
	function() {return 1},
	function() {return 2},
	function() {return 3},
];
let result = 0;
	for(let num of arr) {
		result += num();
	}
	console.log(result);