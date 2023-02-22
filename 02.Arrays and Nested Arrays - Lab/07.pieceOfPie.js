function pieceOfPie(arr, first, second) {
    let indexOfFirst = arr.indexOf(first);
    let indexOfSecond = arr.indexOf(second);
    let result = arr.slice(indexOfFirst, indexOfSecond + 1);
    return result;
}

console.log(pieceOfPie(['Pumpkin Pie',
'Key Lime Pie',
'Cherry Pie',
'Lemon Meringue Pie',
'Sugar Cream Pie'],
'Key Lime Pie',
'Lemon Meringue Pie'));