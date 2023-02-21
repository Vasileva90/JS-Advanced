function lastKNumbersSequence(n, k) {
    let arr = [];
    arr[0] = 1;
    for(let i = 0; i < n - 1; i++) {
       let tempSum = 0;
       tempSum += arr[i];
       for(let j = 1; j < k; j++) {
           if(arr[i - j] !== undefined) {
                tempSum += arr[i - j];
           }
       }
       arr[i + 1] = tempSum;
    }
    return arr;
}

console.log(lastKNumbersSequence(6, 3));