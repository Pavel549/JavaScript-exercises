/* There is a N-dimensional object. Use recursive function to display all 
the primitive elements of this object on the screen:
{a: 1, b: {c: 2, d: 3, e: 4}, f: {g: 5, j: 6, k: {l: 7, 
	m: {n: 8, o: 9}}}} */


let obj1 = {a: 1, b: {c: 2, d: 3, e: 4}, f: {g: 5, j: 6, k: {l: 7, 
	m: {n: 8, o: 9}}}}

function func(obj) {
	for (let key in obj) {
		//console.log(obj[key]);
			if (typeof obj[key] == 'object') {
				func(obj[key]);
			} else {
				console.log(obj[key]);
			}
	}
}

func(obj1);