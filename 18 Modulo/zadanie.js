let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14]
let sum = 0;

for (let n = 0; n < arr.length; n++) {
    let num = arr[n]
    if (num % 2 == 0) {
        sum += num
    }
}

console.log(sum);