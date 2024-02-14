'use strict';

const allCashbox = [4500, 3210, 650, 1250, 7830, 990, 13900, 370];

const getAverageValue = (arr) => {
    let n = 0;

    for (let i = 0; i < arr.length; i += 1) {
        n += Math.floor(arr[i] / allCashbox.length);
    }
    return n;
}

const result = getAverageValue(allCashbox);
console.log('result: ', result);
