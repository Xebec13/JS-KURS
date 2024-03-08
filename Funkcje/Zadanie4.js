function appendStringlength(arr){
    for (i=0;
    i < arr.length;
    i++) {
        let string = arr[i]

        arr[i] = string + string.length
    }
}

const tab1 = ["Jabłko"] 
appendStringlength(tab1)
console.log(tab1);

