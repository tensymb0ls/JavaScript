let myPromise = new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve('foo');
    }, 300);
});
myPromise.then((value) => console.log(value));

// --------------- fetch 1 ----------------
fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => {
        const h1 = document.createElement('h1');
        const text = document.createTextNode(json.title);
        h1.append(text);
        document.body.append(h1);
    }) // successfull

    .catch(error => {
        const h1 = document.createElement('h1');
        const text = document.createTextNode(error);
        h1.append(text);
        document.body.append(h1);
    }) // error

    .finally(final => {
        const h1 = document.createElement('h1');
        const text = document.createTextNode('finally');
        h1.append(text);
        document.body.append(h1);
    }); // anyway

    // -----------------fetch 2 ---------------------
