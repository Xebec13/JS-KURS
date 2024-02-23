let brands = ["sony", "lenovo", "dell", "google", 12345, 123.5];
console.log(brands);
console.log(brands[0]); // sony
console.log(brands[brands.length - 1]);  // ostatni element czyl 123.5
console.log(brands.length);  // 6 pozycji

brands[3] = "acer"
console.log(brands);

let data = [1, 2, true, "Asia", { a: 12 }]
let arrObjects = [
    {name: "Kasia", age: 28, color: "red"},
    {name: "aciuś", age: 32, color: "blue"},
    {name: "Robert", age: 2, color: "green"},
]


let array = ["string", "number", "boolean", "undefined", "null", "bigInt"]
console.log(array);
console.log(array[0]);
console.log(array[array.length - 1]);
array[1] = array[1] + "!"
console.log(array);