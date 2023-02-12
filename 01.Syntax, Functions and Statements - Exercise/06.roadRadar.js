function roadRadar(currentSpeed, area) {
    let speedLimit = 0;
    let status = "";
    if(area === "motorway") {
       speedLimit = 130;
    } else if(area === "interstate") {
        speedLimit = 90;
    } else if(area === "city") {
        speedLimit = 50;
    } else if(area === "residential") {
        speedLimit = 20;
    }
    if(currentSpeed <= speedLimit && currentSpeed > 0) {
        console.log(`Driving ${currentSpeed} km/h in a ${speedLimit} zone`);
    } else {
        let diff = currentSpeed - speedLimit;
        if(diff <= 20) {
           status = "speeding";
        } else if(diff <= 40) {
           status = "excessive speeding";
        } else {
            status = "reckless driving";
        }
        console.log(`The speed is ${diff} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
    }
}

roadRadar(40, 'city');
roadRadar(21, 'residential');
roadRadar(120, 'interstate');
roadRadar(200, 'motorway');