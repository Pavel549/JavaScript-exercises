/* Make a function that will take an array as a parameter and check 
if this array contains two identical elements in a row. */



function func(arr) {
    let flag = false;
    let newArr = [];
    for(let i = 0; i < arr.length; i++){
        if(arr.indexOf(i) === -1){
            if(arr[i] === arr[i-1]){
                flag = true;
            }
            if(arr[i] === arr[i+1]){
                flag = true;
            }
        }
    }
    return flag;
}

let arr1 = [0, 1, 2, 7, 7];
console.log(func(arr1)); 