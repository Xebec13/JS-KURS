let arr = [-6,-5,-4,-3,-2,-1,0,1,2,3,4,5,6]
let sum = 0;
for (let a = 0; a < arr.length;a++) {
    let num = arr[a];
    sum = sum + num;

    if (num > 0) console.log(num);
}

console.log("suma to ", sum);