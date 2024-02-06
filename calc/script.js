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
        if (!sessionStorage.getItem('operator') && display.textContent !== '0') { setOperator('/'); }
        else { clearDisplay(); }
    });

    // Добавляем обработчик события клика для кнопки "*"
    multiply.addEventListener('click', function () {
        if (!sessionStorage.getItem('operator') && display.textContent !== '0') { setOperator('*'); }
        else { clearDisplay(); }
    });

    // Добавляем обработчик события клика для кнопки "-"
    minus.addEventListener('click', function () {
        if (!sessionStorage.getItem('operator') && display.textContent !== '0') { setOperator('-'); }
        else { clearDisplay(); }
    });

    // Добавляем обработчик события клика для кнопки "+"
    plus.addEventListener('click', function () {
        if (!sessionStorage.getItem('operator') && display.textContent !== '0') { setOperator('+'); }
        else { clearDisplay(); }
    });

    // Добавляем обработчик события клика для кнопки "%"
    percent.addEventListener('click', function () {
        calculatePercentage();
    });


    // Добавляем обработчик события клика для кнопки "="
    equals.addEventListener('click', function () {
        calculate();
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

    // Функция для очистки переменной currentValue м operator в sessionStorage
    function clearCurrentValue() {
        sessionStorage.removeItem('currentValue');
        sessionStorage.removeItem('operator');
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

    // Функция для сохранения оператора и текущего значения в sessionStorage
    function setOperator(operator) {
        let currentValue = parseFloat(display.textContent);

        // Сохраняем текущее значение и оператор в sessionStorage
        sessionStorage.setItem('currentValue', currentValue);
        sessionStorage.setItem('operator', operator);

        // Очищаем дисплей для ввода следующего числа
        clearDisplay();
    }

    // Функция для вычисления процента от текущего значения на дисплее
    function calculatePercentage() {
        let currentValue = parseFloat(display.textContent);

        // Если текущее значение не является числом или равно 0, выходим из функции
        if (isNaN(currentValue) || currentValue === 0) {
            return;
        }

        // Вычисляем процент от текущего значения и отображаем результат на дисплее
        let percentage = currentValue / 100;
        display.textContent = percentage.toString();
    }

    // Функция для вычисления значения выражения на дисплее и отображения результата в блоке "result"
    function calculate() {
        let currentValue = parseFloat(display.textContent);
        let savedValue = parseFloat(sessionStorage.getItem('currentValue'));
        const operator = sessionStorage.getItem('operator');

        // Проверяем, есть ли сохраненные значение и оператор
        if (!isNaN(savedValue) && operator) {
            // Выполняем операцию в зависимости от сохраненного оператора
            switch (operator) {
                case '/':
                    currentValue = savedValue / (currentValue !== 0 ? currentValue : 1); // Избегаем деления на 0
                    break;
                case '*':
                    currentValue = savedValue * currentValue;
                    break;
                case '-':
                    currentValue = savedValue - currentValue;
                    break;
                case '+':
                    currentValue = savedValue + currentValue;
                    break;
                default:
                    break;
            }

            const resultDisplay = document.querySelector('.result');
            if (currentValue.toString().length > 14) {
                resultDisplay.textContent = currentValue.toString().slice(0, 12) + '...';
            } else {
                resultDisplay.textContent = currentValue.toString();
            }
            resultDisplay.classList.add('animate-result');
            setTimeout(() => {
                resultDisplay.classList.remove('animate-result');
            }, 100);
        }

        // Очищаем sessionStorage
        clearCurrentValue();
        clearDisplay();
    }


});
