let speed = 150;

if (speed > 200) {
    console.log("Szybko!!!");
} else {
    console.log("Wolno!");
}



// <------------------------------------> Drugie rozwiazanie zamiast petli IF 
// Potrzebne do użycia ?   co ma sie wyswietlic a po dwukropku co ma sie wydarzyc jeżeli warunek nie zostanie spełniony
let result = speed > 200 ? "szybko" : "wolno"
console.log(result);


