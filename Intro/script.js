/*alert('I AM Alert');
const name = prompt('Enter your name');
console.log(name);
const payment = confirm('Confirm pyment?');
console.log(confirm);*/

// math operations
const sum = 2 + 2;
console.log(sum);
const diff = 4 - 2;
const multi = 2 * 5;
const div = 10 / 3;
const pow = 3 ** 3; // возведение в степень
const rem = 10 % 3; // отстаток от деления
const pow2 = (a, b) => a ** b; // функц возведения в степень
console.log(pow2(2, 10));
// next
let a = 2 * 10;
console.log(a);
let b = 10;
b -= 5;
console.log(b);
let c = 6;
c /= 3;
console.log(c);
let d = 2;
d *= 3;
console.log(d);
let tmp = 3;
console.log(tmp++ + ++tmp);
tmp--;
--tmp;
let temp = 10;
console.log(2 + temp++);
console.log(temp);
// casting
let str = 2;
const tmp2 = str + 'string';
console.log(typeof tmp2); // конкотинация числа и строки неявно приводит к изменению типа переменной в строчный
console.log(tmp2); // concotinate
console.log('string1' + ' ' + 'string2');

console.log('My name is %s', 'Andrew');
// или
const firstName = 'Andrew';
console.log(`My name is ${firstName}`); // строковый шаблон описывается косыми (!) кавычками
console.log(`${2 + 2}` + firstName);
console.log(typeof + '2'); // оператор "+" работает как явное приобразование типа в number

let nmr = Number('100500');
console.log(nmr);

let str_2 = String(temp);
console.log(str_2);

let bool = Boolean('string'); // NaN, undefined, null, ""
console.log(bool);

// logic
const isTrue = 4 > 2;
const isTrue_1 = 4 < 6;
const isTrue_2 = 4 >= 4;
const isTrue_3 = 6 <= 6;

const isTrue_4 = 4 == '4'; // неявное преобразование типов
const isTrue_5 = '4' === 4;
const isTrue_6 = 10 !== '10'; // true - двойное отрицание
const isTrue_7 = 10 != '10'; // false
console.log(isTrue, isTrue_1, isTrue_2, isTrue_3, isTrue_4, isTrue_6, isTrue_7);
