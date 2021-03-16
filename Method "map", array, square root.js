/* There is an array. By method MAP extract the square root of
each element. New elements write to the new array.  */


let arr = [1, 2, 3, 4, 5];
let arr1 = arr.map(function(elem) {
	return Math.sqrt(elem);
});
console.log(arr1);
