function substract(a, b) {
    let result = a - b;
    return result
}

let data = substract(100, 45)
console.log(data);


function foo(name) {
    if (name === "Kasia") {
        return; // Przerywanie działanie funkcji
    } else {
        console.log("Imie to:", name);
    }

    return null;
}
console.log(foo("Zosia"));
console.log(foo("Kasia"));
