function sumOfNumbersNM(n, m) {
    let firstNum = Number(n);
    let secondNum = Number(m);
    let sum = 0;
    for(let i = firstNum; i <= secondNum; i++) {
       sum += i;
    }
    console.log(sum);
}

sumOfNumbersNM('1', '5');