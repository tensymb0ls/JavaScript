// деструктуризация массива
const vehicles = ['mustang', 'rav-4', 'urus'];

// --- old school
// const car = vehicles[0];
// const car2 = vehicles[1];
// const car3 = vehicles[2];
// console.log(car);

// ---- modern
const [key1, key2, key3] = vehicles;
// объявление массива констант, значения которых будут соответствовать
// значению элементов массива vehicles по принципу key1 = vehicles[0], key2 = vehicles[1]...
console.log(key2);

function calculate(x, y) {
    const sum = x + y;
    const diff = x - y;
    const multi = x * y;
    const divide = x / y;
    return [sum, diff, multi, divide];
}
const [sumKey, , , divideKey] = calculate(23, 2);
console.log(sumKey);

// -------------------------------------------------
// Splice method: array.splice(startIndex, deleteCount, item1, item2, ...);
// изменяет исходный массив и (!!!) возвращает массив из удаленных элементов
const array = ['banana', 'apple', 'mango', 'pineaple'];
const remove = array.splice(1, 1);
console.log(remove);
console.log(array);
// вставим значение
array.splice(2, 0, 'insert');
console.log(array);
// заменим значение
array.splice(2, 1, 'replace');
console.log(array);
// ---------------------------------------------------
// Spread оператор ...
// !!! внутри функции это остаточный аргумент, а не спред: function (arg1, arg2, arg3, ...array)
// Spread:
const numbers = [1, 2, 3, 4, 5];
const numbers2 = [...numbers];
const numbers3 = [...numbers, ...numbers2];
numbers[5] = 6;
console.log(numbers2);
console.log(numbers);
console.log(numbers3);
