let num = 22;
switch (num) {
    case 5:
        console.log("num jest równe 5");
        break;
    case 12:
        console.log("num jest rowne 12");
        break;
    case 18:
        console.log("num jest rowne 18");
        break;
    case 26:
        console.log("num jest rowne 26");
        break;
    default:
        console.log("Domyslny Kod");
}


let n = 3;

switch (n) {
    case 0:
    case 2:
    case 4:
    case 6:
    case 8:
    case 10:
        console.log(n, "jest parzyste");
        break;
    case 1:
    case 3:
    case 5:
    case 7:
    case 9:
    case 11:
        console.log(n, "jest nieparzyste");
        break;
    default:
        console.log(n, "Poza testowany przedział");
}