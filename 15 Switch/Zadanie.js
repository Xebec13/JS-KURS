let n = 21;

switch (n) {
    case -10:
    case -5:
        console.log("Zimno");
        break;
    case 0:
        console.log("zamarzanie wody");
        break;
    case 5:
        console.log("przedwiosnie");
        break;
    case 10:
        console.log("wiosna");
        break;
    case 20:
        console.log("lato");
        break;
    default:
        console.log("nieznana temperatura");
        break;
}