// function show(txt) {
//     console.log(txt);
// }

// function showArr(arr, callback) {
//     for (let i = 0; i < arr.length; i++) {
//         const num = arr[i];
//         callback(num)
//     }
// }

// const tab = [1, 2, 3, 4, 5, 6]

// // showArr(tab, show)


function greaterThan6(arr, callback) {
    for (
        let i = 0;
        i < arr.length;
        i++) {
        const element = arr[i];
        
        if (element > 6) {
            callback(element);
        }
    }
}

function msg(txt) {
    console.log(txt);
}

const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
// const numbersArray = Array.from({ length: 12 }, (_, index) => index + 1);

// Przetestuj funkcję greaterThan6, przekazując tablicę i funkcję msg jako argumenty
greaterThan6(numbersArray, msg);

// Wywołaj funkcję greaterThan6 ponownie, przekazując funkcję callback jako funkcję anonimową
greaterThan6(numbersArray, function (element) {
    console.log("Element większy od 6:", element);
});
