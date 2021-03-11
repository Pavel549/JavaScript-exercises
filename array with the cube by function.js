/* Call the function, passing it an array with 
numbers as a parameter. Make the function return an array with cubes 
of these numbers. */

function test(arr, func) {
	for (let i = 0; i < arr.length; i++) {
		arr[i] = func(arr[i]);
	}
	
	return arr;
}
let result = test([1, 2, 3], function(num) {
	return num * num * num;
});

console.log(result);