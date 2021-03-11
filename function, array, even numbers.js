/* Create a function that takes an array with numbers as a parameter, 
and check that all elements in this array are even numbers. */

function func(arr){
    let flag = true;

    for(elem of arr){
        if(elem % 2 !== 0){
            flag = false;
            break;
        }
    }
    return flag;
    }

    let arr1 = [2, 4, 6, 8, 10]
    console.log( func(arr1) ); 