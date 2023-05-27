const butPrev = document.getElementById('butPrev');
const butNext = document.getElementById('butNext');
const pic = document.getElementById('pic');

const images = [
    "./123.gif",
    "./1234.gif",
    "./12345.gif",
    "./123456.gif"
]
console.dir(pic);

let index = 0;
pic.src = images[index];
function next() {
    index++;
    if (index > images.length - 1) {
        index = 0;
    }
    pic.src = images[index];
    console.log('next click')
}
butNext.onclick = next;

function prev() {
    index--;
    if (index < 0) {
        index = images.length - 1;
    }
    pic.src = images[index];
    console.log('prev click')
}
butPrev.onclick = prev;