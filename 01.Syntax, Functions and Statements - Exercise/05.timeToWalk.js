function timeToWalk(steps, footprint, speed) {
    let distance  = steps * footprint;
    let restTimeSec = Math.floor(distance / 500) * 60;
    let speedMetersInSec = (speed * 1000) / (60 * 60);
    let time = distance / speedMetersInSec + restTimeSec;
    
    let timeInMin = Math.floor(time / 60);
    let timeInSec = Math.round(time - (timeInMin * 60));
    let timeInH = Math.floor(time / 3600);

    let formattedH = timeInH < 10 ? `0${timeInH}` : `${timeInH}`;
    let formattedM = timeInMin < 10 ? `0${timeInMin}` : `${timeInMin}`;
    let formattedS = timeInSec < 10 ? `0${timeInSec}` : `${timeInSec}`;
    console.log(`${formattedH}:${formattedM}:${formattedS}`);
}

timeToWalk(4000, 0.60, 5);
timeToWalk(2564, 0.70, 5.5);