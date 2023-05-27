const button = document.getElementById('button');
const input = document.getElementById('info');
const input2 = document.getElementById('info2');

// button.onclick = () => console.log("Hello event");

// function show() {
//     alert('Hello event 2');
// }
// button.onclick = show;

// button.addEventListener('click', () => {
//     console.log('event listener click');
// })
// это более ресурсоемкий способ - listener постоянно мониторит состояние


// const obj = {
//     name: '',
// }
// console.log(obj);

function changeText(event) {
    // console.log(input.value);
    // console.log(input2.value);
    console.log(event);
    console.log(event.target.value);
    // obj.name = event.target.value;
    // console.log(obj);

}
// input.onchange = changeText;
// input2.onchange = changeText;
// input.onkeyup = changeText;