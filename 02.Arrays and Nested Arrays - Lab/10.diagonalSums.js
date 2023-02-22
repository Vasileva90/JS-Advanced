function diagonalSums(input) {
    let firstDiagonal = 0;
    let secondDiagonal = 0;
    let firstIndex = 0;
    let secondIndex = input[0].length - 1;
    // input.forEach(arr => {
    //     firstDiagonal += arr[firstIndex++];
    //     secondDiagonal += arr[secondIndex--];
    // });
    // console.log(firstDiagonal + ' ' + secondDiagonal);
    for(let arr of input) {
        firstDiagonal += arr[firstIndex];
        secondDiagonal += arr[secondIndex];
        firstIndex++;
        secondIndex--;
    }
    console.log(`${firstDiagonal} ${secondDiagonal}`);
}

// diagonalSums([[20, 40],
//               [10, 60]]);

diagonalSums([[3, 5, 17],
              [-1, 7, 14],
              [1, -8, 89]]);