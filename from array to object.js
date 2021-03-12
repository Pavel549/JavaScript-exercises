/* Transform from array to object:
['a', 'b', 'c', 'a', 'a', 'b'] => { a: 3, b: 2, c: 1 } */

let arr = ['a', 'b', 'c', 'a', 'a', 'b'];
let obj = {};

for(elem of arr){
    if(obj[elem] === undefined){
        obj[elem] = 1
    }else {
        obj[elem] += + 1
    }
}

console.log(obj);
            