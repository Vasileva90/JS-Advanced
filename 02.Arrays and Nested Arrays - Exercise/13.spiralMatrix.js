function spiralMatrix(row, col) {
    let output = [];
    for(let i = 0; i < row; i++) {
       let curr = [];
       curr.length = col;
       output.push(curr);
    }
    let val = 1;
    let startRowIndex = 0;
    let startColIndex = 0;
    while(startRowIndex < row && startColIndex < col) {
        for(let i = startColIndex; i < col; ++i) {
            output[startRowIndex][i] = val++;
        }
        startRowIndex++;

        for(let i = startRowIndex; i < row; ++i) {
            output[i][col - 1] = val++;
        }
        col--;

        if(startRowIndex < row) {
            for(let i = col - 1; i >= startColIndex; --i) {
                output[row - 1][i] = val++;
            }
            row--;
        }
        if(startColIndex < col) {
            for(let i = row - 1; i >= startRowIndex; --i) {
                output[i][startColIndex] = val++;
            }
            startColIndex++;
        }
    }
    output.forEach(row => console.log(row.join(" ")));
}

spiralMatrix(5, 5);