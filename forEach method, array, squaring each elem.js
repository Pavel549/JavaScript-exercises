/* There is an array. Square each element of this array by forEach method. */

let arr = [1, 2, 3, 4, 5];
let sum = 0;

arr.map(function(elem) {
	sum += Math.pow(elem, 2);
});

console.log(sum);