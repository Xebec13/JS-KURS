function foo(num, obj) {
    num = 12;
    obj.data = "test!";
}

let a = 7;
let data = { data: "tekst" };
foo(a, data);

console.log(`a: ${a}`);
console.log(`data: ${data}`);

// --------------------------------------------------------

const fakeArray = [1,2,3,4,5,6,7]


console.log(fakeArray.map(item => item * 3));
//------------------------------------------------------------

// function threeAll(arr){
//     for (
//         i = 0;
//         i < arr.length;
//         i++
//     ){
//         arr[i] * 3;
//     }
    
// }

// const tab = [1,2,3,4,5,6,7]
// threeAll(tab)
// console.log(tab);

