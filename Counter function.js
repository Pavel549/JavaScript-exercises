/* the counter counts from 0 till 5, after back to zero and continue up.
     */

let func = function() {
    let num = 0;
        return function() {
            console.log(num);
            num++;
            if (num > 5) {
                num = 0;
        }
    }
}();
    func();
    func();
    func();
    func();
    func();
    func();
    func();
    func();