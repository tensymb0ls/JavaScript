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

let resultOfRequest = XhrService.getUsers();
console.log(JSON.parse(resultOfRequest));
const arrayUsers = JSON.parse(resultOfRequest);
document.body.innerHTML = `${arrayUsers.map(item => `
    <div>
    <p>ID: ${item.id}</p>
    <p>Name: ${item.name}</p>
    <p>Username: ${item.username}</p>
    <p>E-mail: ${item.email}</p>
    Website: <a href="${item.website}">${item.website}</a>
    </div>
`)}`;





// if (xhr.status !== 200) {
//     // обработчик ошибки
//     console.log(xhr.status + " " + xhr.statusText);
// } else {
//     console.log(xhr.response);
// }