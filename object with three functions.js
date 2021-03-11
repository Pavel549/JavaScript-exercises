/* Create an object with three functions, each of which will take 
an array of numbers as a parameter. Make the first function return 
the sum of the array elements, the second function returns the sum 
of squares, and the third function returns the sum of cubes. */

let obj = {
	sum: function(num) {
		let sum = 0;
		for (let num1 of num) {
			sum+=num1;
		}
		return sum;
	},
	sumPow: function(num) {
		let sumPow = 0;
		for (let num1 of num) {
			sumPow += Math.pow(num1, 2);
		}
		return sumPow;
	},
	sumCube: function(num) {
		let sumCube = 0;
		for (let num1 of num) {
			sumCube += Math.pow(num1, 3);
		}
		return sumCube;
	}
}
console.log(obj.sum([1,2,3]));