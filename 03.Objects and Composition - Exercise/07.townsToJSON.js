function townsToJSON(input) {
    let data = input.slice(1);
    let result = [];
    for(let line of data) {
        let headers = line.split("|").filter(x => x);
        let obj = {
            Town: headers[0].trim(),
            Latitude: Number(Number(headers[1]).toFixed(2)),
            Longitude: Number(Number(headers[2]).toFixed(2)),
        }
        result.push(obj);
    }
    console.log(JSON.stringify(result));
}

townsToJSON(['| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |']);