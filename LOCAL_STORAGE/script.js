const result = fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => (localStorage.responce = JSON.stringify(json)));
console.log('------------------------- Local storage --------------------');
// приведение локал сторадж респонса к строке

const responce = localStorage.responce; // создаем объект response - строку
const parse = JSON.parse(responce); // парсим строку в JS объект
console.log(parse.id); // теперь можем обратиться к полям объекта


localStorage.user = 'test user 1';
localStorage.responce = result;
console.log(localStorage);

console.log('------------------------- Session storage --------------------');
const session = sessionStorage;
sessionStorage.test = 'test session storage';
console.log(session);

localStorage.setItem('testKey', 'testValue');
const testKey = localStorage.getItem('testKey');
console.log(testKey);

localStorage.removeItem('testKey');
