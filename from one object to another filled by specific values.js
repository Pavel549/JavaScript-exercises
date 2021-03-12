/* Write in a new object those elements whose values are in 
the range from 10 to 20. 
{'a': 12, 'b': 21, 'c': 13, 'd': 23, 'e': 17} => 
{ a: 12, c: 13, e: 17 }*/

let obj = {'a': 12, 'b': 21, 'c': 13, 'd': 23, 'e': 17};
let result = {}
for(key in obj){
    if(obj[key] >= 10 && obj[key] <= 20){
        result[key] = obj[key]
    }
}
console.log(result);