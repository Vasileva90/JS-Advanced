function heroicInventory(input) {
    let result = [];
    
    for(let el of input) {
       let [name, level, items] = el.split(" / ");
       level = Number(level);
       items = items ? items.split(", ") : [];
       result.push({name, level, items});
    }
    let resultJson = JSON.stringify(result);
    console.log(resultJson);
}

heroicInventory(['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara']);