const item = document.getElementById('item');
const addItem = document.getElementById('addItem');
const todoList = document.getElementById('todoList');
// Массив цветов для фона
const colors = [
    "#624aff",
    "#ff4a4a",
    "#b7ff4a",
    "#4affe7",
    "#ff4a89"
]

let add = function () {
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
        console.log(elemLi);

        // -------- изменение цвета -------------
        index++;
        elemLi.id = 'color'; // присваиваем id созданному элементу
        const changeColor = document.getElementById(`color - ${index}`);
        changeColor.style.backgroundColor = colors[index];
        console.log(index);
        if (index > colors.length - 1) {
            index = 0;
        }
        // --------------------------------------
        elemBtnDel.onclick = function (event) {
            elemBtnDel.parentElement.remove();
        }
    }

    item.value = '';
}
addItem.onclick = add;