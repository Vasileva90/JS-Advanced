function mathOperations(first, second, operator) {
    let result;
    if(operator === '+') {
       result = first + second;
    } else if(operator === '-') {
        result = first - second;
    } else if(operator === '*') {
        result = first * second;
    } else if(operator === '/') {
        result = first / second;
    } else if(operator === '%') {
        result = first % second;
    } else if(operator === '**') {
        result = first ** second;
    }
    console.log(result);
}

mathOperations(5, 6, '+');