function multiplyAll() {
    const array = Array.from(arguments);

    let result = 1;
    for (
        i=0;
        i < array.length;
        i++
        ){
            result *=array[i];
        }
    return result
}


console.log(multiplyAll(2,2,2,25));
