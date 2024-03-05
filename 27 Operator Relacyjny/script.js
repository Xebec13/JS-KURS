let obj = { a: 12, b: 14, c: 20 }

console.log("a" in obj); // true


const arr = [1,2,3,4,5,6]

console.log(3 in arr); // true



const date = new Date(2030,12,15)
console.log(date);

if (date instanceof Date) console.log("Prawidłowa data");