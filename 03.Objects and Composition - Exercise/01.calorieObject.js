function calorieObject(input) {
    let result = {};
    for(let i = 0; i < input.length; i+=2) {
        let name = input[i];
        let number = Number(input[i + 1]);
        result[name] = number;
    }
    console.log(result);
}

calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);