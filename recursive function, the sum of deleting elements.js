/* By recursive function count the sum of deleting elements of array:
[2, 4, 6, 2, 8, 9] */ 

let sum = 0;

function getSum(arr) {
	sum += arr.shift();
	console.log(sum);
	if (arr.length > 0) {
		getSum(arr);
	}
}
getSum([2, 4, 6, 2, 8, 9]);