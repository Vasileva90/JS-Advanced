function equalNeighbors(input) {
    let count = 0;
    for(i = 0; i < input.length; i++) {
        for(let j = 0; j < input[i].length; j++) {
            let current = input[i][j];
            let next = input[i][j + 1];
            let bottom = undefined;
            if(input[i + 1]) {
                bottom = input[i + 1][j];
            }
            current === next ? count++ : null;
            current === bottom ? count++ : null;
        }
    }
    return count;
}

console.log(equalNeighbors([['2', '3', '4', '7', '0'],
                            ['4', '0', '5', '3', '4'],
                            ['2', '3', '5', '4', '2'],
                            ['9', '8', '7', '5', '4']]));