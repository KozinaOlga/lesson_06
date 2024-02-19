'use strict';

const allCashboxes = [
    ['Аэ', 4500], 
    [7, 3210], 
    [4, 650], 
    [3, 1250], 
    [9, 7830], 
    [1, 990], 
    [6, 13900], 
    [1, 370]
];


const getAveragePriceGoods = (cashBox) => {
    //let totalGoods = 0;
    //let totalPrice = 0;
    for(let i = 0; i < cashBox.length; i++) { //проходим по элемента внешнего массива
        const innerArrayLength = cashBox[i].length; //вычисляем длину внутреннего массива

        for(let j = 0; j < innerArrayLength.length; j++){ // проходим по элементам «внутреннего» массива
            console.log(cashBox[i][j]);
            //totalPrice += cashboxes[i] * ineerArrayLength[j];
            //totalGoods += cashboxes[i];
    }
    //return Math.floor(totalPrice / totalGoods);

}
}

const averagePriceGoods = getAveragePriceGoods(allCashboxes);








/*
const getAveragePriceGoods = (allCashboxes) => {
    let totalGoods = 0;
    let totalPrice = 0;

    allCashboxes.forEach((element) => {
            totalPrice += element[0] * element[1];
            totalGoods += element[0];
        })
        return Math.floor(totalPrice / totalGoods);
}

const averagePriceGoods = getAveragePriceGoods(allCashboxes);
console.log(averagePriceGoods);
*/

/*
let studentsData = [['Андрей', 24], ['Настя', 23],];

const getArray = (ar) => {

    // проходим по элементам «внешнего» массива
for(let i = 0; i < ar.length; i++){

    // вычисляем длину «внутреннег» массива
    const innerArrayLength = ar[i].length;
    
    // проходим по элементам «внутреннего» массива
    for(let j = 0; j < innerArrayLength; j++) {
        console.log(ar[i][j]);
    }
}
}

const results = getArray(studentsData);
*/


