function sumFirstLast(input) {
    let first = Number(input[0]);
    let last = Number(input[input.length - 1]);
    return first + last;
}

console.log(sumFirstLast(['20', '30', '40']));