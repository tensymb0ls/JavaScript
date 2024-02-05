console.log('--------------------------Spread----------------------------');
const arr1 = [1, 6, 78, 9, 0,];
const arr2 = [4, 78, 2, -3];
const arr3 = [45, 1];

const common = arr1.concat(arr2).concat(arr3);
// или
const common2 = [...arr1, ...arr2, ...arr3];

console.log(common);
console.log(common2);

let min = Math.min(...common2)
console.log('минимальное число = ', min);