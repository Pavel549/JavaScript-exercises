/* Create the function, which will take a value and an array 
as parameters and remove all elements with such a value from the array.*/

function del(elem, arr) {
    for(elem1 of arr){
        if(elem1 === elem){
            let del = arr.indexOf(elem1)
            arr.splice(del, 1)
        }
    }
    return arr;
}

console.log( del('c', ['a', 'b', 'c', 'd', 'e']) );