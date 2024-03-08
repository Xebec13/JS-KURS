function createTv(brand, screenSize, color) {
    if (color != "white"
        && color != "black"
        && color != "silver") {
        return null;
    }
    if (brand.length <= 1) return null;
    if (typeof screenSize !== "number") {
        return null;
    }

    const ttv = {
        tv: "TV",
        brand: brand,
        screenSize: screenSize,
        color: color
    }   
 return ttv;
}   


const tv1 = createTv("Samsung", 15, "silver")
console.log(tv1);
const tv2 = createTv("LG", 17.5, "black")
console.log(tv2);

