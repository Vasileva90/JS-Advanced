function storeCatalogue(input) {
    let result = {};
    for (let el of input) {
        let [name, price] = el.split(" : ");
        price = Number(price);
        result[name] = price;
    }
    let sorted = Object.entries(result).sort((a, b) => a[0].localeCompare(b[0]));
    let firstLetter = "";
    for (let [name, price] of sorted) {
        if(name[0] !== firstLetter) {
           firstLetter = name[0];
           console.log(name[0]);
        }
        console.log(`  ${name}: ${price}`);
    }
}

storeCatalogue(['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10']

);