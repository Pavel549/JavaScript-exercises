/* Using the map method, convert this array: ['123', '456', '789']
to this array let arr = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9]
]; */


let arr = ['123', '456', '789'];
let result = arr.map(function(elem) {
	elem = elem.split("");
        let res = elem.map(function(sub) {
            return Number(sub);
        })
        return res;
});
console.log(result);