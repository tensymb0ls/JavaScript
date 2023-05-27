console.log('-------------------------------------------------');
// array 
const array = ['Peter', 'John', 'Anny'];
console.log(array[0]);
for (i = 0; i < array.length; i++) {
    console.log(i + '->' + array[i]);
}
array[3] = 'Andrew';
console.log(array[3]);

array.pop(); // этот метод вырезает последний элемент массива
console.log(array);

array.push('Artur'); // этот метод добавляет элемент в конец массива
console.log(array);

array.shift(); // вырезает первый элемент массива
console.log(array);

array.unshift('First'); // добавляет элемент в начало массива
console.log(array);

const arrayNumb = [213, 235, 233, 12, 5477].sort((a, b) => a - b);
// сортировка массива по возрастанию. эта процедура "видоизменяет" массив
console.log(arrayNumb);

const pop = arrayNumb.pop();
// тут переменной присваивается значение вырезанного последнего элемента
console.log(pop);

const a = ['one', 'two', 'three'];
const b = ['four', 'five', 'six'];

const c = [].concat(a, b); // или a.concat(b);
// склеивание массивов. исходные массивы сохраняются.
console.log(c);
console.log(a);
console.log(b);

const expand = [...a, ...b];
// три точки - "разворачивание" массива. тут 2 массива тоже склеиваются
console.log(expand);

// ------------------ slice ----------------------
const arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const res = arr3.slice(3);
// взвращает НОВЫЙ массив, вырезая значения указанного индекса
// или возвращает НОВЫЙ массив, состоящий из диапазона индексов
// (!!) исходный массив НЕ мутирует
console.log(res);
console.log(arr3);
// ------------------- splice ------------------------
const res2 = arr3.splice(3);
// делает то же самое что и slice, только мутирует исходный массив
console.log(res2);
console.log(arr3);

const str = 'html, css, javascript, react'
const tech = str.split(', ');
// этот метод нарезает строку по маркерам и делает из нее массив
console.log(tech);


