function sumAll() {
    let result = 0;
    for (
        let i = 0;
        i < arguments.length;
        i++) {
            result += arguments[i];
    }
    return result
}
console.log(sumAll(4,4,5,6,1235));
