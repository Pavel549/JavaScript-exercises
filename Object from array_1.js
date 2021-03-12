
/* Create an object from array:
['a', 'b', 'c', 'd', 'e'] => { a: 1, b: 2, c: 3, d: 4, e: 5 } */

let arr = ['a', 'b', 'c', 'd', 'e'];
let result = {}

for(let i = 0; i < arr.length; i++){
    result[arr[i]] = i + 1
}

arr = result
console.log(arr)