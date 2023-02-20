function diagonalAttack(input) {
    let data = input.slice();
    let main = [];
    data.forEach(line => {
        let row = line.split(" ").map(Number);
        main.push(row);
    });
    let length = main.length - 1;
    let leftSum = 0;
    let rightSum = 0;

    for(let j = 0; j <= length; j++) {
        let leftIndex = main[j][j];
        let rightIndex = main[j][length - j];
        leftSum += leftIndex;
        rightSum += rightIndex;
    }
    leftSum === rightSum ? changeOthers(leftSum) : printResult();

    function changeOthers(sum) {
        for(let j = 0; j <= length; j++) {
            for(let el = 0; el <= length; el++) {
                if(el !== j && el !== length - j) {
                    main[j][el] = sum;
                }
            } 
        }
        return printResult();
    }

    function printResult() {
        main.forEach(row => console.log(row.join(" ")));
    }
}

diagonalAttack(['5 3 12 3 1',
'11 4 23 2 5',
'101 12 3 21 10',
'1 4 5 2 2',
'5 22 33 11 1']);