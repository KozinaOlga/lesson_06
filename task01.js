'us strict';
const allStudents = ['Иванов', 'Петров', 'Сидоров', 'Кузнецов', 'Смирнов', 'Попов', 'Соколов'];

const failedStudents = ['Сидоров', 'Смирнов', 'Попов'];

const filterArray = allStudents.filter(item =>
        !failedStudents.includes(item));

        console.log('filterArray: ', filterArray);

