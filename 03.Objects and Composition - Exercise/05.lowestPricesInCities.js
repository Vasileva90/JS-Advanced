function lowestPricesInCities(input) {
    let result = {};
    for(let el of input) {
        let [town, product, price] = el.split(" | ");
        price = Number(price);
        if(result.hasOwnProperty(product)) {
            let [price1, town1] = result[product];
            if(price < price1) {
                result[product] = [price, town];
            }
        } else {
            result[product] = [price, town];
        }
    }
    for(let [productName, arr] of Object.entries(result)) {
        console.log(`${productName} -> ${arr[0]} (${arr[1]})`);
    }
}

lowestPricesInCities(['Sample Town | Sample Product | 1000',
'Sample Town | Orange | 2',
'Sample Town | Peach | 1',
'Sofia | Orange | 3',
'Sofia | Peach | 2',
'New York | Sample Product | 1000.1',
'New York | Burger | 10']);