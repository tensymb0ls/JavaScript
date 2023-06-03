function fn2(x) {
    return x + 5;
}
let x = fn2(10);
console.log(x);

// факториал 5! = 1*2*3*4*5
function factorial(n) {
    let res = 1;
    for (let i = 1; i <= n; i++) {
        res *= i;
    }
    return res;
}
const test = factorial(5);
console.log(test);

// function expression
const fn3 = function () {
    console.log("Hello, World!")
}
fn3();

const fn4 = factorial; // переменной присвоена функция
console.log(fn4(6));

const arrow = x => x * x;
//-----------------------------------------------------
function uniFunc(x, fnc, fn2) {
    if (x >= 0) {
        return fnc(x)
    } else {
        return fn2(x);
    }
}

function sum(a) {
    return a + a;
}
const z1 = uniFunc(3, sum, arrow);
console.log('-----------');
console.log(z1);
//-----------------------------------------------------

const z3 = uniFunc(5, (x) => x * x, x => x / 2);
// тут 2 анонимные функции, написанные прямо в принимающей части, подставляются в fnc и fn1 и выполняются
console.log(z3);
