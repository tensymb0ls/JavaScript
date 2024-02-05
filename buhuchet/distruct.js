console.log('-------------------------Distruct----------------------------');
// Array distruct
const arr = [1, 2, 3, 4, 5, 678, 98]
console.log(arr[0]);
console.log(arr[1]);
// деструктуризация
let [a, b, c, ...rest] = arr;
console.log(a);
console.log(b);
console.log(c);
console.log(rest);

let x1 = 100;
let y1 = 50;
// деструкт = массив исходных переменных
[x1, y1] = [y1, x1];

console.log(x1);
console.log(y1);

const person = {
    firstName: 'John',
    lastName: 'Smith',
    age: 20,
    fullName: function () {
        return `${this.firstName} ${this.lastName}`
    }
}
// деструктуризация объекта
let { firstName, lastName, ...rest1 } = person;
console.log(firstName, lastName, rest1);
console.log(person.fullName());
printAge(person);

// function printAge(person) {
//     console.log(`Age = ${person.age}`);
// }
// или запись через диструктуризацию
function printAge({ age }) {
    console.log(`Age = ${age}`);
}
// или
const printAge2 = ({ age }) => console.log(`Age = ${age}`);
printAge2(person);

// --------------------------------------------------------
// деструктуризация объекта-события change в инпуте. получаем value
const input = document.getElementById('amountInput');
input.addEventListener('change', function ({ target }) {
    let { value } = target
    console.log(value);
})