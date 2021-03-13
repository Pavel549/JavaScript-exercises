/* Implement a filter function that will filter the array. 
Let the function take an array as the first parameter, and a 
callback function as the second, and return an array of elements 
for which the callback function will return true. */

function filter(arr, callback) {
		let arr1 = [];
	for (let elem of arr) {
		if (callback(elem) == true) {
			arr1.push(elem);
		}	
	}
	return arr1;
}


let result = filter([1, 2, 3, 4, 5], function(elem) {
		if (elem % 2 == 0) {
			return true;
		} else {
			return false;
		}
});

console.log(result);