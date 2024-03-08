function outerFunction(){
    let outerVar = "Jestem zewnętrzną zmienną"
    function innerFunction(){
        let innerVar = "Jestem wewnętrzną zmienną"
        return `${outerVar} ${innerVar}`
    }
    return innerFunction();
}

console.log(outerFunction());
