function townPopulation(input) {
    let result = {};
    for(let el of input) {
        let [town, population] = el.split(" <-> ");
        if(!result.hasOwnProperty(town)) {
             result[town] = Number(population);
        } else {
            result[town] += Number(population);
        }
    }
    for(let town in result) {
        console.log(`${town} : ${result[town]}`);
    }
}

townPopulation(['Istanbul <-> 100000',
'Honk Kong <-> 2100004',
'Jerusalem <-> 2352344',
'Mexico City <-> 23401925',
'Istanbul <-> 1000']);