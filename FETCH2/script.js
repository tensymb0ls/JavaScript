// Sync
// Async -> Power of JS

const base_url = "https://jsonplaceholder.typicode.com/";

let promise = fetch(base_url + "posts")
    .then(response => response.json())
    .then(json => console.log(json))
    .then((body) => {
        console.log(body);
    });
// promiseState -> ожидание успех и провал
// resolve and reject
console.log(promise);

// async - await
async function fetchData() {
    try { // if reject, catch error
        let response = await fetch(base_url + 'posts');
        let body = await response.json();
        console.log(body);
        console.log('--------------------------------------------');
    } catch (error) {
        console.log(error);
    }
}
fetchData();


async function fetchDataPost() {
    let response = await fetch(base_url + 'posts', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            Authorization: 'token'
        },
        body: JSON.stringify({
            title: 'Hello',
            body: 'Human',
        }),
    });
    let body = await response.json();
    console.log(body);
}
fetchDataPost();