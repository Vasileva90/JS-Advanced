function extractIncreasingSubsequenceFromArray(input) {
    let result = [];
    let max = Number.MIN_SAFE_INTEGER;
    input.forEach(x => {
        x >= max ? (result.push(x), max = x) : null;
    });
    return result;
}

console.log(extractIncreasingSubsequenceFromArray([1, 
    3, 
    8, 
    4, 
    10, 
    12, 
    3, 
    2, 
    24]));