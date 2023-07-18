// API JSON placeholder Service

// https://example.com/users
//  Base URL          /Endpoint

const baseUrl = 'https://jsonplaceholder.typicode.com';
const xhr = new XMLHttpRequest();

class XhrService {
    static getPosts() {
        xhr.open('GET', baseUrl + '/posts', false);
        xhr.send();
        return xhr.response;
    }

    static getComments() {
        xhr.open('GET', baseUrl + '/comments', false);
        xhr.send();
        return xhr.response;
    }
    static getAlbums() {
        xhr.open('GET', baseUrl + '/albums', false);
        xhr.send();
        return xhr.response;
    }
    static getPhotos() {
        xhr.open('GET', baseUrl + '/photos', false);
        xhr.send();
        return xhr.response;
    }
    static getTodos() {
        xhr.open('GET', baseUrl + '/todos', false);
        xhr.send();
        return xhr.response;
    }
    static getUsers() {
        xhr.open('GET', baseUrl + '/users', false);
        xhr.send();
        return xhr.response;
    }
}
// --------- variables --------------
const root = document.getElementById('root');
const users = document.getElementById('users');
const posts = document.getElementById('posts');
const comments = document.getElementById('comments');
const albums = document.getElementById('albums');
const todos = document.getElementById('todos');
// ----------------------------------
const click = function (id) {
    let resultOfRequest = id(); // Вызываем переданный метод, например, XhrService.getUsers()
    console.log(JSON.parse(resultOfRequest));
    const arrayUsers = JSON.parse(resultOfRequest);
    root.innerHTML =
        `<div class="container"> ${arrayUsers.map(item => `
    <div class="segment">
    <p style="${!item.id ? style = "display:none;" : ''}">ID: ${item.id}</p>
    <p style="${!item.name ? style = "display:none;" : ''}">Name: ${item.name}</p>
    <p style="${!item.username ? style = "display:none;" : ''}">Username: ${item.username}</p>
    <p style="${!item.email ? style = "display:none;" : ''}">E-mail: ${item.email}</p>
   <span style="${!item.website ? style = "display:none;" : ''}"> Website: <a href="${item.website}">${item.website}</a></span>
    <p style="${!item.title ? style = "display:none;" : style = "font-size:18px"}">Title: ${item.title}</p>    
     <p style="${!item.body ? style = "display:none;" : style = "padding-top:10px;"}">Body: ${item.body}</p>
    <p style="${item.completed == null ? style = "display:none;" : style = "padding-top:10px;"}">Completed: <span style="${!item.completed ? style = "color:red;text-decoration:underline;" : style = "color:blue;text-decoration:underline;"}">${item.completed}</span></p>
     </div>
`).join('')}</div>
`;
}

users.onclick = () => { click(XhrService.getUsers) };
posts.onclick = () => { click(XhrService.getPosts) };
comments.onclick = () => { click(XhrService.getComments) };
albums.onclick = () => { click(XhrService.getAlbums) };
todos.onclick = () => { click(XhrService.getTodos) };


// if (xhr.status !== 200) {
//     // обработчик ошибки
//     console.log(xhr.status + " " + xhr.statusText);
// } else {
//     console.log(xhr.response);
// }