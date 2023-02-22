function biggestElement(input) {
    let max = Number.MIN_SAFE_INTEGER;
    // input.forEach(el => {
    //     let curr = Math.max(...el);
    //     curr > max ? max = curr : null;
    // });
    for(let el of input) {
        let curr = Math.max(...el);
        if(curr > max) {
            max = curr;
        }
    }
    return max;
}

console.log(biggestElement([[20, 50, 10],
    [8, 33, 145]]));