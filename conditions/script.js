// conditions
// const isTrue = confirm('Ok = True and Cancel = False')
// console.log(isTrue);
// if (isTrue) {
//     alert('You checked true');
// }
//--------------------------
// let number = prompt('Enter any number:');
// console.log(typeof number);
// const tmpNumber = Number(number);
// if (tmpNumber % 2 === 0) {
//     console.log('Number' + tmpNumber + 'even')
// }
// if (tmpNumber % 2 !== 0) {
//     console.log(`number ${tmpNumber} odd`)
// }
// //--------------------------------------
// let password1 = prompt('enter password');
// let password2 = prompt('confirm password');
// if (password1 === password2) {
//     alert('Access granted');
// } else {
//     alert('Access denied');
// }
// --------------------------------------
// const testSwitch = +prompt('Enter case number from 0 to 3');
// switch (testSwitch) {
//     case 0:
//         console.log('Zero case');
//         break;
//     case 1:
//         console.log('First case');
//         break;
//     case 2:
//         console.log('Second case');
//         break;
//     case 3:
//         console.log('Third case');
//         break;
//     default:
//         alert('You have to enter case number from 0 to 3 only!');
// }
// ------------------------------------------------
// const bool = true;
// const tern = bool ?
//                     'The bool value is true' :
//                     'The bool value is false';
// console.log(tern);
// -------------------------------------------------
const a = true;
const b = true;
const or = a || b;
// || - любая часть выражения тру = возвращает тру. проверяет условие до первого тру значения
console.log(or);
const and = a && b;
console.log(and);
// && - любая часть фолс = фолс. для возврата тру все части выражения должны быть тру
const not = !true;
console.log('Result = ' + not);