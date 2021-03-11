/* Create an object with three functions. Let the first return the number 
1 through return, the second - the number 2, the third - the number 3.
Using the created functions, display the sum of the returned numbers by 
iterating over an object and display the result of the functions
on the screen.
 */

 let obj = {
	func1: function() {return 1;},
	func2: function() {return 2;},
	func3: function() {return 3;},
 };
 let result = 0;
 for (let num in obj) {
	 result+=obj[num]();
 }
 console.log(result);