/* Write code that expands the multi-dimensional array to a 
one-dimensional array:
[1, [2, 7, 8], [3, 4, [5, [6, 7]]]]------> [1, 2, 7, 8, 3, 4, 5, 6, 7] */


let arr = [1, [2, 7, 8], [3, 4, [5, [6, 7]]]];

function simple(arr) {
	let arr1 = [];
	function func(arr) {
		for (let i = 0; i < arr.length; i++) {
			if (typeof arr[i] == 'object') {
				func(arr[i]);
			} else {
				arr1.push(arr[i]);
			}
		} 
		return arr1;
	} 
	console.log(func(arr));
}
simple(arr);