let a = 0 / 0;
console.log(a);  // NaN

let b = Math.sqrt(-1);
console.log(b);  // NaN

console.log(isNaN(a));  // true bo zmienna a to nie jest liczba


let c = 10 / 5;
console.log(isNaN(c));  // false bo 10 / 5 to 2