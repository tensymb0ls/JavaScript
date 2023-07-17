const xhr = new XMLHttpRequest();
// GET POST PUT DELETE
xhr.onload = function () {
    // console.log(xhr.responseText);
    document.body.innerHTML = xhr.responseText;
}
// Method, Path, async, Login, Password
xhr.open("GET", "ajax_info.txt");
xhr.send();

if (xhr.status !== 200) {
    // обработчик ошибки
    console.log(xhr.status + " " + xhr.statusText);
} else {
    console.log(xhr.responseText);

}