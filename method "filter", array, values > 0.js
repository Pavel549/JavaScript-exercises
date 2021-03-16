/* By method "filter" rest the values which > 0. */

let arr = [1, 2, 3, -6, 4, -5, 5, -1, -9];

let result = arr.filter(function(elem) {
	return elem > 0;
})
console.log(result);