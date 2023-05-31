// Создание глобальных переменных которые хранят в себе элементы DOM дерева
const item = document.getElementById('item');
const addItem = document.getElementById('addItem');
const todoList = document.getElementById('todoList');
// Массив с цветами для backgroundColor элементов списка todoList
const colors = [
    "#624aff",
    "#ff4a4a",
    "#b7ff4a",
    "#4affe7",
    "#ff4a89"
]
// Helpers and Function
const getRandomValueFromArrayLength = (array) => Math.floor(Math.random() * array.length);
const createLi = () => document.createElement('li');
const createButton = () => document.createElement('button');
const createTextNode = (text) => document.createTextNode(text);
const appentChildToElement = (parent, child) => parent.appendChild(child);
const removeParent = (element) => element.parentElement.remove();

function setIdAndChangeColor(element) {
    let rand = getRandomValueFromArrayLength(colors);
    index++;
    element.id = `color-${index}`;
    const changeColor = document.getElementById(`color-${index}`);
    changeColor.style.backgroundColor = colors[rand];
}

function setId(element, text) {
    element.id = text;
}

function createListItem(inputText) {
    if (!inputText) return;
    const elemLi = createLi();
    const textNode = createTextNode(inputText);
    appentChildToElement(elemLi, textNode);
    appentChildToElement(todoList, elemLi);
    createCloseButton(inputText, elemLi);
    createEditButton(inputText, elemLi);
    createAcceptButton(inputText, elemLi);
    createDeclineButton(inputText, elemLi);
    setIdAndChangeColor(elemLi);
    console.dir(setId);
}

function createCloseButton(inputText, element) {
    const elemBtnDel = createButton();
    if (inputText) {
        setId(elemBtnDel, 'close');
        // appentChildToElement(elemBtnDel, createTextNode('X'));
        appentChildToElement(element, elemBtnDel);
        elemBtnDel.onclick = () => elemBtnDel.parentElement.remove();
    }
}

function createEditButton(inputText, element) {
    const elemBtnEdit = createButton();
    if (inputText) {
        setId(elemBtnEdit, 'edit');
        // appentChildToElement(elemBtnEdit, createTextNode('E'));
        appentChildToElement(element, elemBtnEdit);
    }
}
function createAcceptButton(inputText, element) {
    const elemBtnAccept = createButton();
    if (inputText) {
        setId(elemBtnAccept, 'accept');
        appentChildToElement(element, elemBtnAccept);
    }
}

function createDeclineButton(inputText, element) {
    const elemBtnDecline = createButton();
    if (inputText) {
        setId(elemBtnDecline, 'decline');
        appentChildToElement(element, elemBtnDecline);
    }
}

let add = function () {
    let text = item.value;
    createListItem(text);
    item.value = '';
}
addItem.onclick = add;
// ------------------------------------------------------------
const editItem = document.getElementById('edit');
let displayItemFunction = function () {
    const displayAcceptBtn = document.getElementById('accept');
    displayAcceptBtn.style.display = 'block';
}
editItem.onclick = displayItemFunction;
// --------------------------------------------------------------