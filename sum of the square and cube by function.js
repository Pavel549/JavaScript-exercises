/* Make a function func that takes two numbers as parameters,
but return the sum of the square of the first number with the cube of 
the second number.

For this, make a helper function square, which raises the number to
square, and the cube helper function to cube the number. */

function func(num1, num2) {
	function square(num) {
		return num * num;
	}
	function cube(num) {
		return num * num * num;
	}
	return square(num1) + cube(num2);
}
console.log(func(2, 3));