const item = document.getElementById('item');
const addItem = document.getElementById('addItem');
const todoList = document.getElementById('todoList');

addItem.onclick = function () {
    let text = item.value;
    console.log(text);
    if (text) {
        // CRUD
        const elemLi = document.createElement('li'); // создаем элемент тега <li>
        const elemBtnDel = document.createElement('button');
        const textNode = document.createTextNode(text); // создаем переменную со значнием текстового поля id item
        elemLi.append(textNode); // вставляем в созданный тег значение тектового поля
        elemBtnDel.append('X');
        elemLi.appendChild(elemBtnDel);
        todoList.appendChild(elemLi); // вставляем созданный тег с присвоенным текстовым значением в вэлемент ol c id todoList

        elemBtnDel.onclick = function (event) {
            elemBtnDel.parentElement.remove();
        }
    }

    item.value = '';
}
