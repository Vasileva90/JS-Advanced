function magicMatrices(matrix) {
    let sum = matrix[0].reduce((x, y) => x + y);
    for(let i = 0; i < matrix.length; i++) {
        let temp1 = 0;
        let temp2 = 0;
        for(let j = 0; j < matrix.length; j++) {
            temp1 += matrix[i][j];
            temp2 += matrix[j][i];
        }
        if(temp1 !== sum || temp1 !== temp2) {
            return false;
        }
    }
    return true;
}

console.log(magicMatrices([[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]));