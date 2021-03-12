/* Write the keys of this object to one array and the values 
to another: {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5} => 
[ 'a', 'b', 'c', 'd', 'e' ] [ 1, 2, 3, 4, 5 ] */

let obj = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5};
let arr1 = []
let arr2 = []

for(key in obj){
    arr1.push(key);
    arr2.push(obj[key]);
}

console.log(arr1);
console.log(arr2);
                   