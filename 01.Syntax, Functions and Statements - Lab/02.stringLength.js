function stringLength(first, second, third) {
    let sum = first.length + second.length + third.length;
    let average = Math.floor(sum / 3);
    console.log(sum);
    console.log(average);
}

stringLength('chocolate', 'ice cream', 'cake');