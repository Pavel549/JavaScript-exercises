/* Using the iterating, find the sum of the elements of this 
object. */

let obj = {
    1: {
        1: 11,
        2: 12,
        3: 13,
    },
    2: {
        1: 21,
        2: 22,
        3: 23,
    },
    3: {
        1: 24,
        2: 25,
        3: 26,
    },
}

let result = 0;

for(i in obj){
    for(j in obj[i]){
        result += obj[i][j];
    }
}
console.log(result);
            