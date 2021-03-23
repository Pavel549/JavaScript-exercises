/* Display days till sunday. */



let date = new Date();
console.log(tillSunday(date.getDay()));

function tillSunday(num) {
	return "До воскресения осталось:" + " " + (7 - num)+ " " + func(num);
}

function func(num) {
	if (7 - num == 1 ) {
		return "день";
	} else if (7 - num > 1 && 7 - num < 5) {
		return "дня";
	} else if (7 - num >= 5) {
		return "дней";
	}
}