/* Create a function that recursively outputs the first 10 Fibonacci 
numbers to an array. Fibonacci numbers are constructed as follows: each new number 
is equal to the sum of the two previous ones. The first two Fibonacci 
numbers are 1 and 2. The next number will be 1 + 2 = 3, the next number 
will be 2 + 3 = 5, and so on. */


let arr = []; 

function func(prevPrevNum, prevNum){  
	let current = prevPrevNum + prevNum;
	arr.push(current);
		if (arr.length < 10) {
		func(prevNum, current);
		} else {
		return arr;
	} 
	console.log(arr); 
} 
	func(1,2); 