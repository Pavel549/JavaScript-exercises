

let date = new Date();

console.log(addzero(date.getFullYear()) + "-" + addzero((date.getMonth() + 1)) + "-" + addzero(date.getDate()));    

function addzero(num) {
	if (num > 0 && num <=9) {
		return "0" + num;
	} else {
		return num;
	}
}