function hoopCount(n) {
    if (n >= 10) {
        return `Great, now move on to tricks.`
    }
    else {
        return `Keep at it untill you get it.`
    }
}

console.log(hoopCount(10));
console.log(hoopCount(11));
console.log(hoopCount(1));
//----------------------------------------------------------------------------

const arryNeedle = ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"];

function findNeedle(haystack) {
    const index = haystack.indexOf("needle");
    if (index !== -1) {
        return "found the needle at position " + index;
    }else {
        return "needle not found in the haystack"
    }
}

console.log(findNeedle(arryNeedle));

//---------------------------------------------------------
function basicOp(operation,value1,value2){
    if (operation == "number" 
    || operation == 0) {
        return `Bład`;
    }else if(operation == "+"){
        return value1 + value2;
    }else if(operation == "-") {
        return value1 - value2;
    }else if (operation == "*") {
        return value1 * value2;
    }else if (operation == "/") {
        return value1 / value2;
    }
}

console.log(basicOp("+",4,6));
console.log(basicOp("*",4,6));
console.log(basicOp("/",14,6));
console.log(basicOp("*",44,6));
console.log(basicOp("-",47,76));
console.log(basicOp("/",104,67));
console.log(basicOp("*",4,6));


function basicOp1(operation,value1,value2){
    switch (operation) {
        case "+":
            return value1 + value2;
        case "-":
            return value1 - value2;
        case "*":
            return value1 * value2;
        case "/":
            return value1 / value2;
        default:
            return 0;
    }
}

//-------------------------------------------------------
function simpleMultiplication(number){
    if(number % 2 == 0){
        return number * 8
    }else {
        return number * 9
    }
}

console.log(simpleMultiplication(2));
console.log(simpleMultiplication(1));
console.log(simpleMultiplication(8));


//--------------------------------------
const squareArray = [1,2,2]
console.log(squareArray.map(item => (item**2)+ item));
//---------------------------------------------------

function squareSum(numbers){
    return numbers.reduce((sum,num) => sum + num * num)
}


console.log(squareSum([1,2,2]));
