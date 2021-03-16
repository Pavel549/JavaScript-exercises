/* There is an array with the strings. Using the map method, 
reverse the characters of each string. */


let arr = ["abcde","abcde","abcde","abcde"];
let result = arr.map(function(elem) {
	return elem.split("").reverse().join("");
});
console.log(result);