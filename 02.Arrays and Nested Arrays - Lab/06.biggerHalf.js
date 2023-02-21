function biggerHalf(input) {
     let sorted = input.sort((a, b) => a - b);
     sorted = sorted.slice(sorted.length / 2);
     return sorted;
}

console.log(biggerHalf([4, 7, 2, 5]));