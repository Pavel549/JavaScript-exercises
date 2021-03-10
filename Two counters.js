/* The function in the closure keeps number 10. each call to 
the function decreases that number by 1 and displays the 
reduced number. When the number less than zero, display
 "stop counting". */


function test() {
	let num = 10;
	    return function() {
            if (num < 0) {
                console.log("отсчет окончен");
             }
		console.log(num);
		num--;
        
	}
};

let func1 = test();
func1();
func1();
func1();
func1();
func1();
func1();
func1();
func1();
func1();
func1();
func1();


let func2 = test();
func2();
func2();
func2();
func2();
func2();
func2();
func2();
func2();
func2();
func2();
func2();

