function daysInAMonth(month, year) {
    let reuslt = new Date(year, month, 0).getDate();
    console.log(reuslt);
}

daysInAMonth(1, 2012);