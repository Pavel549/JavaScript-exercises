/* There is an array. Capitalize the first character 
of each string. */

function capitalise(arr, upper) {
    let result = [];
    for (elem of arr) {
        result.push(upper(elem)+elem.substr(1));
    }
    console.log(result);
}

function upper(str){
    return str[0].toUpperCase();
}

capitalise(["abcd", "abcd", "abcd", "abcd"], upper);