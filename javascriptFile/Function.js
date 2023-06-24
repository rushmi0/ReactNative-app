function avg(...data) {
    let sum = 0;
    for (const item of data) {
        sum += item;
    }
    return sum / data.length
}

console.log(avg(2, 3, 4, 5));


// * arrow function format
let avgArrowFunc = (...data) => {
    let sum = 0;
    for (const item of data) {
        sum += item;
    }
    return sum / data.length
}
console.log(avgArrowFunc(2, 3, 4, 5));