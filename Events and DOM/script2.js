const butPrev = document.getElementById('butPrev');
const butNext = document.getElementById('butNext');
const pic = document.getElementById('pic');

const images = [
    "./1.jfif",
    "./2.jfif",
    "./3.jfif",
    "./4.jfif"
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