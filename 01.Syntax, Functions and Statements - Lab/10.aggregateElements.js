function aggregateElements(numbers) {

    aggregate(numbers, 0, (a, b) => a + b);
    aggregate(numbers, 0, (a, b) => a + 1 / b);
    aggregate(numbers, '', (a, b) => a + b);

    function aggregate(numbers, initVal, func) {
        let result = initVal;
        for(let i = 0; i < numbers.length; i++) {
            result = func(result, numbers[i]);
        }
        console.log(result);
    }
}

aggregateElements([1, 2, 3]);