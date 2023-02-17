function printEveryNthElementFromAnArray(arr, step) {
    let result = arr.filter((x, i) => i % step === 0);
    return result;

    // let result = [];
    // for(let i = 0; i < arr.length; i+=step) {
    //     let num = arr[i];
    //     result.push(num);
    // }
    // return result;
}

console.log(printEveryNthElementFromAnArray(['5', 
'20', 
'31', 
'4', 
'20'], 
2));