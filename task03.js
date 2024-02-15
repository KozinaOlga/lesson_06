'use strict';

const names = ['Noah', 'Liam', 'Mason', 'Jacob', 'Robot', 'William', 'Ethan', 'Michael', 'Alexander'];

const newNames = names.slice();
console.log('newNames: ', newNames);

const addPrefix = (array) => {
    
    const newArr = [];

    for (let i = 0; i < newNames.length; i++) {
        newArr.push('Mr ' + (array[i]));
    }

    return newArr;
}

const res = addPrefix(names, 'Mr');
console.log('res: ', res);


