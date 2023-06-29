$(function () {
    // вызов плагина knob для селектора c классом hour
    $('.hour').knob({
        min: 0,
        max: 24,
        bgColor: '#333',
        fgColor: '#ffec03',
        displayInput: false,
        width: 300,
        height: 300,
        readOnly: true,
    });
    $('.min').knob({
        min: 0,
        max: 60,
        bgColor: '#333',
        fgColor: '#eeff03',
        displayInput: false,
        width: 190,
        height: 190,
        readOnly: true,
    });
    $('.sec').knob({
        min: 0,
        max: 60,
        bgColor: '#333',
        fgColor: '#ddaa03',
        displayInput: false,
        width: 120,
        height: 120,
        readOnly: true,
    });
})
// обработка времени
function clock() {
    let s = $('.sec');
    let m = $('.min');
    let h = $('.hour');
    let d = new Date();

    // time values
    let second = d.getSeconds();
    let minute = d.getMinutes();
    let hour = d.getHours();

    s.val(second).trigger('change');
    // триггер следит за состоянием и если change то обновляет состояние
    m.val(minute).trigger('change');
    h.val(hour).trigger('change');
    setTimeout(clock, 1000); // таймаут для функии clock в 1000 милисекунд (1 сек)

}
clock();