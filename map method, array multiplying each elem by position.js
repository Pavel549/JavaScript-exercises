/* There is an array with values. Using the map method, 
multiply each element by its ordinal number in the array. */

let arr = [1, 2, 3, 4, 5, 6, 7];
let result = arr.map(function(elem, index) {
	return elem * index;
});
console.log(result);