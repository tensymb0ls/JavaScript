document.addEventListener('DOMContentLoaded', function () {
    const display = document.querySelector('.display');
    const greyButtons = document.querySelectorAll('.grey');
    const ac = document.getElementById('ac');
    const invert = document.getElementById('invert');
    const percent = document.getElementById('percent');
    const division = document.getElementById('division');
    const multiply = document.getElementById('multiply');
    const minus = document.getElementById('minus');
    const plus = document.getElementById('plus');
    const equals = document.getElementById('equals');

    // Добавляем обработчик события клика для кнопки "AC"
    ac.addEventListener('click', function () {
        clearDisplay();
        clearCurrentValue();
    });

    // Добавляем обработчик события клика для кнопки "±"
    invert.addEventListener('click', function () {
        invertFunc();
    });

    // Добавляем обработчик события клика для кнопки "÷"
    division.addEventListener('click', function () {
        divisionFunc();
    });

    // Добавляем обработчик события клика для каждого элемента с классом "grey"
    greyButtons.forEach(button => {
        button.addEventListener('click', function () {
            const value = button.textContent;
            updateDisplay(value);
        });
    });

    // Функция для обновления содержимого дисплея калькулятора
    function updateDisplay(value) {
        // Если дисплей пустой (содержит только "0"), заменяем его на значение кнопки
        if (display.textContent === '0') {
            display.textContent = value;
        } else {
            // Иначе добавляем значение кнопки к текущему содержимому дисплея
            display.textContent += value;
        }
    }

    // Функция для очистки содержимого дисплея калькулятора
    function clearDisplay() {
        display.textContent = '0';
    }

    // Функция для очистки переменной currentValue в sessionStorage
    function clearCurrentValue() {
        sessionStorage.removeItem('currentValue');
    }

    // Функция для добавления или удаления отрицательного знака числа на дисплее
    function invertFunc() {
        // Если число на дисплее не равно "0", то изменяем его знак
        if (display.textContent !== '0') {
            // Проверяем, есть ли уже отрицательный знак
            if (display.textContent.charAt(0) === '-') {
                // Если есть, удаляем его
                display.textContent = display.textContent.slice(1);
            } else {
                // Иначе добавляем отрицательный знак
                display.textContent = '-' + display.textContent;
            }
        }
    }

    // Функция для выполнения операции деления
    function divisionFunc() {
        let currentValue = parseFloat(display.textContent);

        // Проверяем, есть ли значение в sessionStorage
        if (sessionStorage.getItem('currentValue') !== null) {
            currentValue = parseFloat(sessionStorage.getItem('currentValue'));
        }

        // Если текущее значение не является числом или равно 0, выходим из функции
        if (isNaN(currentValue) || currentValue === 0) {
            return;
        }

        // Выполняем операцию деления и сохраняем результат в sessionStorage
        let result = currentValue / parseFloat(display.textContent);
        sessionStorage.setItem('currentValue', result);

        // Отображаем результат на дисплее
        display.textContent = result.toString();
    }
});
