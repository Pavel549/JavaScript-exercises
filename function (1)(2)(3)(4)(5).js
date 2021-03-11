/* Make a function that is called like:
func (1) (2) (3) (4) (5). It should return an array of numbers passed 
by parameters. */

function func(num1) {
	return function(num2) {
		return function(num3) {
			return function(num4) {
				return function(num5) {
					let arr = [];
					arr.push(num1, num2, num3, num4, num5);
					return arr;
				}
			}
		}
	}
}
console.log(func(1)(2)(3)(4)(5));