function listOfNames(input) {
    let index = 0;
    input.sort((a, b) => a.localeCompare(b)).forEach(el => {
         console.log(`${index + 1}.${el}`);
         index++;
    });
}

listOfNames(["John", "Bob", "Christina", "Ema"]);