/* Create a function which taking 3 functions as parameters
and returning the sum of the results of the taken functions. */

let func1 = function() {return 1;}
let func2 = function() {return 2;}
let func3 = function() {return 3;}

function test(func1, func2, func3) {
	console.log(func1() + func2() + func3());
}

test(func1, func2, func3);

