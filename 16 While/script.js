let i = 0;


while (i < 4) {
    console.log(i);
    i += 1;
    i++; // To samo co wyżej, tego w Pythonie nie ma. 
    // i--; <-------- Dekrementacja czyli przeciwstawne działanie do inkrementacji
}


let names = ["ania", "dawid", "żegota", "bożydar"]
let b = 0;
while ( b < names.length) {
    console.log(names[b]);
    b++;
}

// W ten sposob wyswietlimy wszystko w tabilcy 

let d = 10;
do {
    console.log("d:", d);
    d++;
} while (d < 5)