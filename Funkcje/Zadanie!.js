function createUser(name,contact){
    let user = {
        name: name,
        email: null,
        telephone:null
    }
    if(typeof contact == "string"){
       user.email = contact
    }


    if (typeof contact == "number"){
        user.number = contact;
    }


    return user
}

let user1 = createUser("Ola", "ola@example.com")
let user2 = createUser("Ola", 7256121)
console.log(user1);
console.log(user2);
