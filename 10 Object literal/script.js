let countryName = "Poland";
let countryPopulation = 38000000;

let country = {
    Name:"Poland",
    Population: 38_000_000,
    Continent: "Europe",
    Cities: ["Warszawa", "Karków", "Poznań"],
    Capital: {
        name:"Warszawa",
        population:2_000_000
    }
};

console.log(country);
console.log(country.Name); // Poland
console.log(country.Population);
console.log(country.Capital.name); // Mozemy dostawac sie do obiektów po kropce .


let car = {
    Name: "Ford",
    Type: "Mustang",
    Velocity: 320,
}

console.log(car.Name);
console.log(car.Type);
console.log(car.Velocity);


let cat = {
    Name: "Lily",
    Color: "White",
    Weight: 14,
};
console.log(cat);
cat.Name = "Czaruru"
cat.Color = "Brown"
console.log(cat);