function circleArea(input) {
    let type = typeof input;
    if(type === "number") {
       let circleArea = input * input * Math.PI;
       console.log(circleArea.toFixed(2));
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${type}.`);
    }
}

circleArea(5);