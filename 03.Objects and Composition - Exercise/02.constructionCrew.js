function constructionCrew(obj) {
    if(obj.dizziness === true) {
       let amountOfWater = 0.1 * obj.weight * obj.experience;
       obj.levelOfHydrated += amountOfWater;
       obj.dizziness = false;
    }
    return obj;
}

console.log(constructionCrew({ weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true }));