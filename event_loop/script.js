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

function getInfo(member, year) {
    member.name = "Lydia";
    year = "1998";
}

const person = { name: "Sarah" };
const birthYear = "1997";

getInfo(person, birthYear);

console.log(person, birthYear);
