console.log('Hello, World!');
var depricatedVariable = 10; // var - устаревший тип переменных
console.log(depricatedVariable);

// let variable
let variable = 42;
console.log(variable);
let myFavoriteVariable = 'I Love You';
console.log(myFavoriteVariable);
variable = 3.14;
console.log(variable);

// const
const pi = 3.14;

// boolean
let bool = true;
bool = false;

// null
let tmp = null;
console.log(tmp);

// string
const str = 'I Am A String';
console.log(str);

// array
const array = [42, 3.14, 'string', true, null, { key: 'object' }];
console.log(array);
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}

const foo = () => {
    console.log('Function');
}
foo();

const log = (params) => {
    console.log('variable is:', params);
}
log(pi); // функция принимает занчение переменной pi и выводит в консоль

console.log(typeof pi); // typeof = тип 

// alert особенность: дойдя до этого метода парсер останавливается и продолжить только после отклика юзера на алерт
alert('I Am Alert')
