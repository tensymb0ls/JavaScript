const xhr = new XMLHttpRequest();
// GET POST PUT DELETE
xhr.onload = function () {
    console.log(xhr.responseText);
}
xhr.open("GET", "phones.json");
xhr.send();
