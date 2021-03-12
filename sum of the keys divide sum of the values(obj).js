/* Find the sum of the keys of this object and divide it by the 
sum of the values.
{1: 6, 2: 7, 3: 8, 4: 9, 5: 10} */

let obj = {1: 6, 2: 7, 3: 8, 4: 9, 5: 10};

key_sum = 0;
values_sum = 0;
for(key in obj){
    key_sum = key_sum + Number(key);
    values_sum += obj[key]
}
console.log(key_sum / values_sum);