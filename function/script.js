// DOM Docunment object model

// old school
console.log(document);
let element = document.getElementById('root');
console.dir(element);
element.style.background = 'grey';
console.log(element.textContent);
element.textContent = 'Changed text';

let element2 = document.getElementsByTagName('p')
console.dir(element2);

let element3 = document.getElementsByClassName('test');
console.log(element3);

// modern
console.log('------- modern ------');
let elem = document.querySelector('#root');
console.log(elem);
let elements = document.querySelectorAll('.test');
console.log(elements);



//----------- function declaration ----------
function sum(a) {
    return a + a;
}
console.log(sum(2));

//function expression
const sum2 = function (a) {
    return a + a;
}
console.log(sum2(3));

//row function
const row = (a) => a + a;
console.log(row(5));

//----------------------
function printName(name) {
    console.log(name);
}
printName('I am a function');

function printName(name) {
    if (!name) {
        console.log('error');
        return;
    }
    let hello = "hello";
    console.log(hello + ' ' + name);
}
printName('UserName');

//------- (factorial 5 = 1*2*3*4*5 = 120) --------
const factorial = function (n) {
    if (typeof n !== 'number') {
        console.log('error: the variable type in not a number');
        return;
    }
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}
console.log(factorial('a'));
// callback
function callback(item) {
    console.log(item);
}
function printArray(array, func) {
    for (let i = 0; i < array.length; i++) {
        func(array[i]);
    }
}
const arr = [1, 2, 3, 4, 5];
printArray(arr, callback);

// local global
let name = 'Andrew';
function printName2() {
    let name2 = 'Petia';
    let name = 'Vova';
    console.log(name);
}
printName2();
console.log(name);
//console.log(name2); // name2 is local(!) variable of printName function - not working

function testDefaultParams(number) {
    let params = number || 'default_number';
    console.log('Number = ' + params);
    return params;
}
testDefaultParams(123);

//--------------- arrays ---------------------------------

const arrayTest = [1, 2, 3, 'four', true];
console.log(arrayTest[4]);
console.log(arrayTest);

arrayTest.length = 3;
arrayTest[10] = 'ten';
function printArray2(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}
printArray2(arrayTest);

