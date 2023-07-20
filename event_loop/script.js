console.log('start');
setTimeout(function () {
    console.log('1 second');
}, 1000);
setTimeout(() => {
    console.log('2 seconds');
}, 2000);
setTimeout(() => {
    console.log('1.5 sec');
}, 1500);
console.log('end');