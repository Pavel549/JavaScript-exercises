
/* There is a N-dimensional array with the strings:
['a', ['b', 'c', 'd'], ['e', 'f', ['g', ['j', 'k']]]]
By recursive function output the strings further way:
'abcdefgjk'
*/

let arr = ['a', ['b', 'c', 'd'], ['e', 'f', ['g', ['j', 'k']]]];


function func(arr) {
	let str = "";
	for (let elem of arr) {
		if (typeof elem == 'object') {
			str += func(elem);
		} else {
			str += elem;
		}
	}
	return str;
}
console.log(func(arr));