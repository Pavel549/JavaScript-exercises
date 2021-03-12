/* Switch the keys and values in this object:
'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5} => 
{ '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e' } */

let obj = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5}; 
let result = {}

for(key in obj){
    result[obj[key]] = key
}

console.log(result)
            