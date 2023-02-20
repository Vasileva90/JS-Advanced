function ticTacToe(input) {
    let initialState = [
        [false, false, false],
        [false, false, false],
        [false, false, false]
    ];

    let isfirstPlayer = true;
    for (let coordinates of input) {
        let [x, y] = coordinates.split(" ");
        if (initialState[x][y]) {
            console.log("This place is already taken. Please choose another!");
            continue;
        }
        let marker = isfirstPlayer ? "X" : "O";
        initialState[x][y] = marker;

        if(checkWin(initialState, marker)) {
           console.log(`Player ${marker} wins!`);
           printTable(initialState);
           return;
        }

        if(!checkFreeSpace(initialState)) {
            console.log("The game ended! Nobody wins :(");
            printTable(initialState);
            return;
        }
        isfirstPlayer = !isfirstPlayer;
    }
    
    function checkFreeSpace(initialState) {
        for(let row = 0; row < initialState.length; row++) {
            for(let col = 0; col < initialState[row].length; col++) {
                if(!initialState[row][col]) {
                    return true;
                }
            }
        }
        return false;
    }

    function printTable(initialState) {
        initialState.forEach(row => console.log(row.join("\t")));
    }

    function checkWin(initialState, marker) {
        for (let i = 0; i < initialState.length; i++) {
            if (initialState[i][0] === marker &&
                initialState[i][1] === marker &&
                initialState[i][2] === marker) {
                return true;
            } else if (initialState[0][i] === marker &&
                       initialState[1][i] === marker &&
                       initialState[2][i] === marker) {
                return true;
            } else if (initialState[0][0] === marker &&
                       initialState[1][1] === marker &&
                       initialState[2][2] === marker) {
                return true;
            } else if (initialState[0][2] === marker &&
                       initialState[1][1] === marker &&
                       initialState[2][0] === marker) {
                return true;
            }
        }
        return false;
    }
}

ticTacToe(["0 1",
"0 0",
"0 2", 
"2 0",
"1 0",
"1 1",
"1 2",
"2 2",
"2 1",
"0 0"]);