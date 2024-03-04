let i = [1,2,3,4,5,6,7,8,9,10,11,12]
let n = 0;
let sum = 0;
while ( n < i.length) {
    const el = i[n];
    
    if (el > 5) sum = sum + el;
    
    n++;
}

console.log("Suma to ", sum);

