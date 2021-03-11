/* There is an array with strings. Use the function
to reverse the characters of each string. */

function reverse(arr, reverseString) {
    let result = [];
    for (elem of arr) {
        result.push(reverseString(elem));
    }
    console.log(result);
}

function reverseString(str){
    return str.split("").reverse().join("");
}

reverse(["abcd", "abcd", "abcd", "abcd"], reverseString);