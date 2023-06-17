// bom
// console.log(window);
// console.log(window.navigator);
// console.log(navigator.userAgent);
// console.log(window.location);
// console.log(window.location.origin);

//dom
// console.log(window.document.body.childNodes[1]);
// window.document.body.childNodes[1].innerHTML = Heading();

// // react принцип
// function Heading() {
//     return '<p>Hello, World</p>';
// }

// const div = document.getElementById();
// const div2 = document.querySelector();

// --------------------  time ----------------------
// setInterval(printTime, 1000);

// function printTime() {
//     const d = new Date();
//     const h = d.getHours();
//     const m = d.getMinutes();
//     const s = d.getSeconds();
//     // console.log(`${h}:${m}:${s}`);
//     const h1 = document.createElement('h1');
//     const time = document.createTextNode(`${h}:${m}:${s}`);
//     h1.appendChild(time);
//     const root = document.getElementById('root');
//     root.replaceChild(h1, root.firstElementChild);
// }
// printTime();
// -------------------------------------------------------
let t = setInterval(move, 10);

const box = document.getElementById('box');
console.dir(box);
let position = 0;
function move() {
    box.style.top = position + 'px';
    box.style.left = position + 'px';
    position <= 249 ? position++ : clearInterval(t);

}
