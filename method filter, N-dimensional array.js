/* There is a N-dimensional array, display by method "filter" only
 simple elements [1, 2, [3, 4], 5, [6, 7]] ---> [ 1, 2, 5 ]*/

let arr = [1, 2, [3, 4], 5, [6, 7]];

let result = arr.filter(elem => typeof elem != 'object');

console.log(result);