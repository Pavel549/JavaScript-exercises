/* Create a function that recursively outputs the first 10 Fibonacci 
numbers. Fibonacci numbers are constructed as follows: each new number 
is equal to the sum of the two previous ones. The first two Fibonacci 
numbers are 1 and 2. The next number will be 1 + 2 = 3, the next number 
will be 2 + 3 = 5, and so on. */


function func(prevPrevNum, prevNum) {
		let current = prevPrevNum + prevNum;
		console.log(current);
			if (current <= 300) {
				func(prevNum, current);
			}
	}
func(1, 2);