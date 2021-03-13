/* There is an array. Multiply the array value by each 
position of this value in array. */

function func(arr, callback) {
	let arr1 = [];
	let i = 0;
	for (let elem of arr) {
		arr1.push(callback(elem, i++));
	}
	console.log(arr1);
}

function callback(elem, elemPosition) {
	return elem * elemPosition;
}

func([1, 2, 3, 4, 5], callback);