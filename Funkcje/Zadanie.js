function averageValue(a,b,c,d) {
    let result = (a + b + c + d) / averageValue.length
    return result
    
}

console.log(averageValue(2,3,4,5));
console.log(averageValue(5,5,5,5));
console.log(averageValue(5,3,4,5));
console.log(averageValue(5,3,4));


function hireEmployee(name,surname,email,age,proffesion) {
    if (name.length < 3) return null;
    if (surname.length < 3) return null;
    if (email.length < 3) return null;
    if ( age < 18 ) return null;
    if (proffesion.length < 3) return null;


    if (proffesion != "programmer" 
    && proffesion != "admin"
    && proffesion != "manager"){
    return null
    }
    const obj = {
        company: "DMC",
        name: name,
        surname: surname,
        email: email,
        age: age,
        proffesion: proffesion
    }

    return obj
}

const employee1 = hireEmployee("Kasia", "Kowalska", "email@email.pl", 33, "programmer")
console.log(employee1);


const employee2 = hireEmployee("Ż", "Kowalska", "email@email.pl", 33, "programmer")
console.log(employee2);
