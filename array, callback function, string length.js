/* There is an array with strings. Leave in this array only strings 
that are 1 to 3 characters long. */

function func(arr, strLength) {
	let arr1 = [];
	for (let elem of arr) {
		if (strLength(elem) >= 1 && strLength(elem) <= 3) {
			arr1.push(elem);
		}
	}
	console.log(arr1);
}

function strLength (str) {
	return str.length;
}

func(["abcd", "abc", "a", "abcdef", "ab"], strLength);